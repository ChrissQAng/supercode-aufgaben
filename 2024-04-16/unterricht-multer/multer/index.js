import express from "express";
import multer from "multer";

const app = express();

const PORT = 3003;
app.listen(PORT, () => console.log("server ready at", PORT);