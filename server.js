import mongoose from "mongoose";

import app from "./app.js";

// token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTMwNGUzNjhiM2QxYmRhNDA2MjU3MSIsImlhdCI6MTY5NTc0NTI2NiwiZXhwIjoxNjk1ODI4MDY2fQ.X2wh5-dhOMaaBvKYXvpWq5fBgLsmwRnNFWF_eNwWJjM"

const { DB_HOST, PORT = 3000 } = process.env;
mongoose
  .connect("mongodb+srv://Illia:eAajIpMAT3T2NyIg@cluster0.9mys7h8.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
