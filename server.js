const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const port = 9083;

// Middleware to parse cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "src", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading HTML file");
      return;
    }
    res.send(data);
  });
});

// Endpoint to download a text file
app.get("/download", (req, res) => {
  // Check if the cookie `isAdmin` is set to true
  if (req.cookies.isAdmin === "true") {
    res.setHeader(
      "Content-disposition",
      "attachment; filename=random-file.txt"
    );
    res.setHeader("Content-type", "text/plain;charset=utf-8");
    res.send("hello");
  } else {
    // If cookie validation fails, respond with a 401 error
    res.status(401).json({ error: "invalid request" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
