import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import bodyParser from "body-parser";
import path from "path";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4400;

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});*/

console.log("Hola gente");
app.use(express.static(path.join(__dirname, "public")));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
