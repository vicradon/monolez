import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  console.log("Listening on port 3000");
});
