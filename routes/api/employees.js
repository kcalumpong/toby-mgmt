require("dotenv").config();
const express = require("express");
const AWS = require("aws-sdk");
const formidable = require('formidable');
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const empController = require("../../controllers/empController");
const docController = require("../../controllers/docController");

const s3 = new AWS.S3({
    params: {
        Bucket: process.env.S3_BUCKET,
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        Region: process.env.AWS_REGION
    }
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
router.post("/upload", getFiles, function(req, res, next) {
  console.info(req.files.file, req.files.file.name)
  fs.readFile(req.files.file.path, (err, file) => {
      if (err) {
          console.error(err)
      }
      let params = {
          Key: `${req.user.username}/${req.files.file.name}`,
          Body: file,
          ACL: "public-read",
      }
      
      const upload = s3.putObject(params).promise()
      upload.then(() => res.sendStatus(200)).catch(err => {console.error("S3", err); res.sendStatus(500)})
  });
});


// Matches with "/api/employees"
router.route("/")
  .get(empController.findAll)

router.route("/create-personal")
  .post(empController.createPersonal);

router.route("/create-job")
  .post(empController.createJob);

router.route("/create-asset")
  .post(empController.createAsset)

// DOCUMENT CREATION
router.route("/save-document-name")
  .post(docController.create);



// Matches with "/api/employees/:id"
router.route("/:username")
  .get(empController.findByUsername);

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
