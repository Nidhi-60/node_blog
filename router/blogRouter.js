const express = require("express");
const authUser = require("../middleware/userAuth");
const blogController = require("../controller/blogController");
const router = express.Router();

router.get("/writeBlog/", authUser, blogController.blogForm);
router.post("/write/", authUser, blogController.write);
router.get("/read/:id/", blogController.readBlog);
router.get("/edit/:id/", authUser, blogController.editForm);
router.post("/update/", blogController.update);
router.get("/delete/:id/", blogController.delete);

module.exports = router;
