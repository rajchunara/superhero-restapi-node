const express = require("express");
const superheroRouter = require("./routes/superhero");

const app = express();

//Handle CORS
//Here we are just giving headers so that permission is given
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Here instead of "*" we can mention our website so that only our
  //web page can access this api but postman like tool can access any api
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type,Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");

    return res.status(200).json({});
  }

  //next() is used because we want to respond the request the URL so it goes to that url and responds accordingly
  next();
});

//This acts like middleware, every request goes through this
app.use("/superhero", superheroRouter);

module.exports = app;
