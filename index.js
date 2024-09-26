const express = require("express");
const booksData = require("./data/data"); // importing  folder data from the file data express
require('dotenv').config();
const app = express(); // create a express application

// import connectDB from "./config/database";

const connectDB  = require("./config/database");

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('<h1>Starting Books</h1>')
})

//GET api/books
app.get("/api/books/", (req, res) => {
  if (booksData.length === 0) {
    res.status(200).json({ success: true, message: "No books data available" });
  } else {
    res.status(200).json({ success: true, data: booksData });
  }
});

app.get("/api/books/:id", (req, res) => {
  // console.log(req.params); {id: 1}
  const { id } = req.params; // acesses the id using the request params
  const book = booksData.find((book) => book.id === id);
  if (!book) {
    res
      .status(404)
      .json({ success: false, message: `No book with id ${id} found` });
  }
  return res.status(200).json({ success: true, data: book });
});

// parse JSON data, a inbuilt middleware function
app.use(express.json()); //  to use the JSON parser for incoming requests.

/* The code snippet `app.post("/api/books", (req, res) => { ... }` is setting up a POST route in the
Express application. When a POST request is made to the endpoint "/api/books", this route handler
function is executed. */
// app.post("/api/books", (req, res) => {
  // get the client payload (title and author data)
  // const {title, author} = req.body;
//   const title = req.body.title;
//   const author = req.body.author;
//   console.log("Server recieved the payload ", req.body);
//   res.send("Getting data from request");
// });

app.post("/api/books", (req, res) => {
  // Get the client payload (title and author data)
  const { title, author } = req.body;
  console.log("Server received the payload", req.body);
  // Validate the input
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: "Must provide both book title and author name",
    });
  }
  // Create a new book object
  const newBook = {
    id: booksData.length + 1,
    title,
    author,
  };
  // Respond with the new book data
  return res.status(201).json({
    success: true,
    data: newBook,
  });
});


// PUT /api/recipe/:id - Update an existing recipe
// app.put("/api/books:id", (req, res) => {
//   const { id } = req.params;
//   const {  title, author } = req.body;
//   const bookIndex = booksData.findIndex((book) => book.id === parseInt(id));

//   if (bookIndex === -1) {
//     return res.status(404).json({ success: false, message: `No book with id ${id} found` });
//   }

//   if ( !title || !author) {
//     return res.status(400).json({
//       success: false,
//       message: "Must provide title and author for the books",
//     });
//   }




// All other routes
app.get('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1); // exit the process with failure
  }
};

startServer();