import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

// Connecting database using URL
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
