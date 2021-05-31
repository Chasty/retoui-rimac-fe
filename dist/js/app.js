"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = process.env.PORT || 4400;
/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});*/
console.log("Hola gente");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
