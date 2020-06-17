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

// ------ controller -------
const getRoute = () => {
  const router = express.Router();
  router.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
};

const getPath = (path, subpath) => {
  fs.readdirSync(path + subpath, { withFileTypes: true }).forEach(function (
    file
  ) {});
};

// ------ controller -------
app.use("/v1", getRoute());

export default app;
