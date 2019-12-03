require("dotenv").config();
const express = require("express");
const AWS = require("aws-sdk");
const formidable = require('formidable');
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const empController = require("../../controllers/empController");
const docController = require("../../controllers/docController");
const authController = require("../../controllers/authController");
const auth = require("../../utils/auth");

AWS.config.region = process.env.AWS_REGION;

const s3 = new AWS.S3({
    params: {
        Bucket: process.env.S3_BUCKET,
    },
    signatureVersion: "v4"
});

// MIDDLEWARE
const getFiles = (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    if (err) {
      console.error(err);
    }
    req.files = files;
    next();
  });
};

// Matches with "/api/employees/upload"
router.post("/upload", auth.isLoggedIn, getFiles, function(req, res, next) {
  // console.info(req.files.file, req.files.file.name)
  fs.readFile(req.files.file.path, (err, file) => {
      if (err) {
          console.error(err)
      }
      let params = {
          Key: `${req.user.username}/${req.files.file.name}`,
          Body: file,
          ACL: "public-read",
      }
      const upload = s3.putObject(params).promise();
      upload.then((r) => {
        console.info(r);
        const signedUrl = s3.getSignedUrlPromise('getObject', {Key: `${req.user.username}/${req.files.file.name}`});
        signedUrl.then((url) => res.json({ url })).catch(err => {console.error("url", err); res.sendStatus(500)})
      }).catch(err => {console.error("S3", err); res.sendStatus(500)})
  });
});


// Matches with "/api/employees"
// router.route("/")
//   .get(empController.findAll);

router.route("/")
  .get(empController.findAllProfiles);

router.route("/create-personal")
  .post(empController.createPersonal);

// router.route("/employees")
//   .post(empController.getEmployee);
  
router.route("/create-job")
  .post(empController.createJob);

router.route("/create-asset")
  .post(empController.createAsset)

// DOCUMENT CREATION
router.route("/save-document-name")
  .post(docController.create);



// Matches with "/api/employees/:id"
router.route("/:id")
  .get(empController.getEmployee);

  // router.route("/api/employees/")
  // .get(empController.getEmployee);

router.route("/update-personal-info/:id")
  .put(empController.updatePersonal);

router.route("/update-job-info/:id")
  .put(empController.updateJob);
  
router.route("/update-asset-info/:id")
  .put(empController.updateAsset);

router.route("/delete/:id")
  .delete(empController.remove);

// DOCUMENT DELETION
router.route("/delete-document/:id")
  .delete(docController.remove);

module.exports = router;
