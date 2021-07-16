const express = require("express");
const colors = require("colors");
const connectDB = require("./config/connect.js")
const dotenv = require("dotenv")
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const routes = require("./bookRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

//confi for the env variable
dotenv.config()
//connecting the db
connectDB()

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Add routes, both API and view
app.post('/search', (req, res) => {
  console.log(req.body.searchTerm);
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.searchTerm}&key=${process.env.BOOK_API_KEY}`)
   
    .then(response => {
      
      const formattedBooks = response.data.items.map(book => {
        return {
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle ? book.volumeInfo.subtitle : null,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
          authors: book.volumeInfo.authors.join(', ')
        }
      })
      res.status(200).send(formattedBooks)
    })
    .catch(err => {
      console.log(err);
      res.status(400)
      throw new Error('something went wrong with google books search');
    })
})
app.use("/api", routes);

// Connect to the Mongo DB
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/client/build" )))
  app.get("*", (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')))
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`.yellow.bold);
});
