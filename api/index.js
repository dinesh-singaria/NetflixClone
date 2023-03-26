import express from "express";
import mongoose from "mongoose";

// APP config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://Dinesh:Dinesh@cluster0.99b6w.mongodb.net/netflixdb?retryWrites=true&w=majority`;

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// Db config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => console.log(err));
