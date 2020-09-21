const Blog = require("../model/blogModel");

module.exports.blogForm = (req, res) => {
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }
  res.render("blog/blogForm", {
    title: "Write Blog",
    isAuthenticated: isAuthenticated,
    user: user,
  });
};

module.exports.write = async (req, res) => {
  title = req.body.title;
  if (req.file) {
    image = req.file.originalname;
  } else {
    image = "noimage.png";
  }
  desc = req.body.desc;

  const blog = new Blog({
    title: title,
    image: image,
    desc: desc,
    user: req.session.user._id,
  });

  const b = await blog.save();

  return res.redirect("/home/");
};

module.exports.readBlog = async (req, res) => {
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }

  const blog = await Blog.findById({ _id: req.params.id }).populate("user");

  res.render("blog/blogDetail", {
    title: "Blog | detail",
    isAuthenticated: isAuthenticated,
    user: user,
    blog: blog,
  });
};

module.exports.editForm = async (req, res) => {
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }

  const blog = await Blog.findById({ _id: req.params.id });

  res.render("blog/blogEdit", {
    title: "Blog | Edit",
    isAuthenticated: isAuthenticated,
    user: user,
    blog: blog,
  });
};

module.exports.update = async (req, res) => {
  title = req.body.title;
  desc = req.body.desc;
  id = req.body.blogId;
  if (req.file) {
    image = req.file.originalname;
  } else {
    image = req.body.prevImage;
  }
  const blog = await Blog.updateOne(
    { _id: id },
    {
      $set: {
        title: title,
        desc: desc,
        image: image,
      },
    }
  );

  return res.redirect("/home/");
};

module.exports.delete = async (req, res) => {
  const blog = await Blog.deleteOne({ _id: req.params.id });

  return res.redirect("/home/");
};
