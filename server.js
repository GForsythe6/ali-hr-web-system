require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "Public")));

const sharepointRoutes = require("./src/routes/sharepoint");

app.use("/api", sharepointRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public/Pages/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});