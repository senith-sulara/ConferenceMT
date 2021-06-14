const express = require("express");
const router = express.Router();
const multer = require("multer");
const editor = require("../controllers/editor.controller");


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads/home/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime().toString() + "_" + file.originalname);
  },
});

const fileFiler = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // accept
    cb(null, true);
  } else {
    // reject
    cb(new Error("message : file not acceptable"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFiler,
});

//--------------------------------------------------------------------

//insert new editor
router.post(
  "/insert",
  upload.array("photos", 12),
  // checkAuth,
  // checkRole(["admin"]),
  editor.insert
);

//get all editors
router.get("/getall", editor.getAll);

//search editors
// router.get("/search/:search", editor.searchPages);

//get all page details with less details
router.get("/getall/simple", editor.getAllLessDetails);

//get pages by id
router.get("/getsingle/:id", editor.getPageById);

//delete editor by id
router.delete("/delete/:id", editor.delete);

//update editor by id
router.patch(
  "/update/:id",
  upload.array("photos", 12),
  checkAuth,
  checkRole(["editor"]),
  editor.update
);

module.exports = router;
