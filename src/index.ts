import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";
import ormConfig from "./config/ormconfig"

//Connects to the Database -> then starts the express
createConnection(ormConfig)
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    //Set all routes from routes folder
    app.use("/", routes);

    app.listen(process.env.PORT, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));
