import express from "express";
import morgan from "morgan";
import cors from "cors";

import { movieRouter } from "./routes/movieRouter.js";
import { favRouter } from "./routes/favRouter.js";

import { connectToDatabase } from "./models/index.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// thunder-client test
app.get("/", (req, res) => res.json({ hello: "world" }));

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/favs", favRouter);

connectToDatabase()
  .then(() => {
    const PORT = 3008;
    app.listen(PORT, () => console.log("server ready at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
