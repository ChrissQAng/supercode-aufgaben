import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";
import { userRouter } from "./routes/userRouter.js";
import { answerRouter } from "./routes/answerRouter.js";
import { quizRouter } from "./routes/quizRouter.js";
import { questionRouter } from "./routes/questionRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/quiz/user", userRouter);
app.use("/api/v1/quiz/answer", answerRouter);
app.use("/api/v1/quiz/quiz", quizRouter);
app.use("/api/v1/quiz/question", questionRouter);

try {
  await connectToDatabase();

  const PORT = 3009;
  app.listen(PORT, () => console.log("Server listening at port", PORT));
} catch (err) {
  console.log(err);
  process.exit();
}
