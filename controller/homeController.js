const Blog = require("../model/blogModel");
const path = require("path");

module.exports.homePage = async (req, res) => {
  // console.log(req.session);
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }

  let success = req.flash("success");
  if (success.length > 0) {
    success = success[0];
  } else {
    success = null;
  }

  const blog = await Blog.find().populate("user");

  res.render("home", {
    title: "Home",
    isAuthenticated: isAuthenticated,
    user: user,
    blog: blog,
    imagePath: path.join(__dirname, "..", "image"),
    successMessage: success,
  });
};
