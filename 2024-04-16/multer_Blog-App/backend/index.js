import cors from "cors";
import express from "express";
import multer from "multer";

import { readBlog, writeBlog } from "./filesytem.js";

const app = express();
// cors policy
app.use(cors());
// request log
app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});
// static "links"
app.use(express.static("uploads"));

// body parser (middleware)
app.use(express.json());

// GET all
app.get("/api/v1/blog", (req, res) => {
  readBlog()
    .then((blog) => res.status(200).json(blog))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read all blog items" })
    );
});

// POST
app.post("/api/v1/blog", (req, res) => {
  const newBlogItem = {
    id: Date.now(),
    title: req.body.title,
    image: req.body.image,
    text: req.body.text,
  };
  readBlog()
    .then((blog) => [...blog, newBlogItem])
    .then((blogWithNewItem) => writeBlog(blogWithNewItem))
    .then((blogWithNewItem) => res.status(200).json(blogWithNewItem))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not write new blog entry" })
    );
});

// upload with multer

const upload = multer({ dest: "./uploads" });
app.post(
  "/api/v1/blog/files/uploads",
  upload.single("attachment"),
  (req, res) => {
    res.json({ image: req.file.image });
  }
);

const PORT = 3003;
app.listen(PORT, () => console.log("server ready at port: ", PORT));
