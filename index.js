const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const messageRoutes = require("./routes/messages");

app.use("/api/messages", messageRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongo Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});
