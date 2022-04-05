import * as express from "express";
import { static as _static } from "express";
import { routes } from "./routes";
import { join, resolve } from "path";
import * as bodyParser from "body-parser";
import * as multer from "multer";

const environments = {
  port: 4200,
}
const app = express();
app.use(multer().any());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

// setup simple logger
app.use((req, res, next) => {
  // Logger.info(`Access received to ${req.url}`);
  next();
});

// Serve static files if request does NOT match any apis.
app.use(routes(), _static(join(__dirname, "..", "ems-schedule-manager")), (req, res) =>
  res.sendFile(resolve(__dirname, "..", "ems-schedule-manager", "index.html")),
);

app.listen(environments.port, () => {
  console.log(`Server listening on port ${environments.port}`);
});
