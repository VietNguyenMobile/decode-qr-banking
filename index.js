import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const port = 3000;

app.get("/", (req, res) => {
  res.send("home page");
});

routes(app);

const PORT = process.env.port || port;

app.listen(PORT, () => {
  console.log("Server is running ", PORT);
});
