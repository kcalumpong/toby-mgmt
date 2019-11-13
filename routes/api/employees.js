require("dotenv").config();
const express = require("express");
const router = require("express").Router();
const empController = require("../../controllers/empController");
const AWS = require("aws-sdk");
const formidable = require('formidable');
const fs = require("fs");
const path = require("path");
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
          Key: req.files.file.name,
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
  .post(empController.create);

// // Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(empController.findByName)
  .put(empController.update)
  .delete(empController.remove);

module.exports = router;
