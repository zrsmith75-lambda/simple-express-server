const express = require("express");

const server = express();
server.use(express.json());

let books = [
  {
    title: "Happy days",
    pub: 1975
  }
];
server.get("/", (req, res) => {
  res.status(200).json({
    message: `GET is running`
  });
});

server.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

const PORT = 5150;
server.listen(PORT, () =>
  console.log(`\n** Server is listening on port ${PORT} **\n`)
);
