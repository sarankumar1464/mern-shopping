const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const items = require("./routes/api/items");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const app = express();

dotEnv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

app.use("/api/items", items);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
