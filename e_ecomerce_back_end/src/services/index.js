const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    `mongodb+srv://trungdang01012003:${process.env.MONGO_DB}@cluster0.qbdyvh5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connect DB success !");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("server is running in port : ", +port);
});
