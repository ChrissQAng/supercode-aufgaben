import express from "express";

const app = express();

app.get("/api/v1/transactions", (req, res) => {
    
})


const PORT = 3030;
app.listen(PORT, () => console.log("server ready at", PORT));
