const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.registration = (req, res) => {
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }
  res.render("auth/registrationForm", {
    title: "Registration",
    isAuthenticated: isAuthenticated,
    user: user,
  });
};

module.exports.register = async (req, res) => {
  (username = req.body.username),
    (email = req.body.email),
    (password = req.body.password);

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const userData = new User({
    username: username,
    email: email,
    password: hashPassword,
  });

  const user = await userData.save();

  if (user) {
    req.flash("success", "successfully registered..");
    res.redirect("/home/");
  } else {
    res.redirect("/auth/registration/");
  }
};

module.exports.loginForm = (req, res) => {
  let isAuthenticated = null;
  let user = null;
  if (req.session.isLoggedIn) {
    (isAuthenticated = true), (user = req.session.user);
  }

  let message = req.flash("error-message");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }

  res.render("auth/loginForm", {
    title: "login",
    isAuthenticated: isAuthenticated,
    user: user,
    error: message,
  });
};

module.exports.login = async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  const salt = await bcrypt.genSalt(10);

  const user = await User.findOne({
    username: username,
  });

  if (user) {
    const hashPasswordMatch = await bcrypt.compare(password, user.password);
    if (hashPasswordMatch) {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.flash("success", "successfully login");
      res.redirect("/home/");
    } else {
      req.flash("error-message", "**please enter valid password");
      res.redirect("/auth/login");
    }
  } else {
    req.flash("error-message", "**please enter valid username");
    res.redirect("/auth/login");
  }
};

module.exports.logout = async (req, res) => {
  req.flash("success", "successfully logout");
  const session = await req.session.destroy();
  res.redirect("/home/");
};
