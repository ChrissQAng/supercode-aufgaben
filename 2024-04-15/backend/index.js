import express from "express";
import cors from "cors";
import { readToDos, writeToDos } from "./filesytem.js";

const app = express();

// cors policy
app.use(cors());

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});
// parsen des bodys (middleware)
app.use(express.json());

// GET: alle to-dos
app.get("/api/v1/todos", (_, res) => {
  readToDos()
    .then((todos) => res.status(200).json(todos))
    .catch((err) =>
      res.status(500).json({
        err,
        message: "Could not read all To-Dos",
      })
    );
});

// GET: ein to-Do mit id
app.get("/api/v1/todos/:id", (req, res) => {
  const toDoId = req.params.id;
  readToDos()
    .then((todos) => todos.find((t) => t.id.toString() === toDoId))
    .then((foundToDo) => res.status(200).json(foundToDo))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read one to-do" })
    );
});

// POST

// readToDos()
// -> transactions [<old transaction>]
// -> transactions [...<old transaction>, newTransaction] // "add new element"
// -> writeTransactions(new-array) // save to file
// -> send to client

app.post("/api/v1/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    task: req.body.task,
    check: req.body.check,
  };
  console.log(newTodo);
  readToDos()
    .then((toDos) => [...toDos, newTodo])
    .then((toDoswithNew) => writeToDos(toDoswithNew))
    .then((toDoswithNew) => res.status(200).json(toDoswithNew))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new to-do" })
    );
});

// DELETE
app.delete("/api/v1/todos/:id", (req, res) => {
  const toDoIdToDelete = req.params.id;
  readToDos()
    .then((toDos) => toDos.filter((t) => t.id.toString() !== toDoIdToDelete))
    .then((toDos) => writeToDos(toDos))
    .then((toDos) => res.status(200).json(toDos))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not remove item" })
    );
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at PORT:", PORT));
