const express = require("express");
const bodyparser = require("body-parser");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const flash = require("connect-flash");

const connection = require("./db/connection");
const User = require("./model/userModel");

const homeRouter = require("./router/homeRouter");
const authRouter = require("./router/authRouter");
const blogRouter = require("./router/blogRouter");

console.log(__dirname);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "image"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const app = express();

app.use(multer({ storage: storage }).single("img"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(express.static("./public"));
app.use(flash());
app.use(session({ secret: "blog", resave: false, saveUninitialized: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/home/", homeRouter);
app.use("/auth/", authRouter);
app.use("/blog/", blogRouter);

connection
  .then((res) => {
    // console.log(res);
    app.listen(3000, () => {
      console.log(`server running at : http://localhost:3000/`);
    });
  })
  .catch((err) => {
    console.log("something missing not connected..");
  });
