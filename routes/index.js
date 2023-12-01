import decodeRouter from "./decode.js";

const routes = (app) => {
  app.use("/decode", decodeRouter);
};

export default routes;
