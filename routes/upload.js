const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");

const connection = require("../env/db");
const queries = require("../queries");

const fs = require("fs");
const path = require("path");

// const storage = multer.memoryStorage();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.get("/", (req, res) => {
  queries
    .getAll("tbl_file")
    .then((results) => res.json(results))
    .catch((error) => res.status(500).json({ error: error.message }));
});

// router.post('/', upload.single('file'), (req, res) => {
//   const file = req.file;
// });

router.post("/", upload.single("file"), (req, res) => {
  const file = req.file;
  const fileData = {
    file_name: file.originalname,
  };
  connection.query('INSERT INTO tbl_file SET ?', fileData, (error, results) => {
    if (error) throw error;
    res.status(200).send('File uploaded successfully');
  });
});

module.exports = router;
