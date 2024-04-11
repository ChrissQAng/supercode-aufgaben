import express, { request } from "express";

const app = express();

//  alles in einem ohne zu stoppen, da kein .send
// ,d.h. middleware (Zwischenschritt in der Verarbeitung)
// request-handler, der aber nach einer Verarbeitung weiter gibt (next)
app.use((req, res, next) => {
  console.log("new request", req.method, request.url);
  next();
});

//
app.get("/", (req, res) => {
  console.log("new request", req.method, req.url);
  res.send("it works :");
});
// endpunkt: get "/"
app.get("/hallo", (req, res) => {
  console.log("new requwest", req.method, req.url);
  res.send("hallo zurück :");
});
// endpunkt: get "/hallo"

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
