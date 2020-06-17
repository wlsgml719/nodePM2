import express from "express";

const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, HEAD, OPTIONS"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const getRoute = () => {
  const router = express.Router();
};

app.use("/v1", router);

// app.use("/v1", controllers.router);

export default app;
