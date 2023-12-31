"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dbconfig_1 = __importDefault(require("./config/dbconfig"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
dbconfig_1.default.Sequelize;
const port = process.env.PORT || 3000; // Use the value of PORT environment variable or default to 3000
app_1.default.listen(port, () => {
    console.log("server is running on port " + port);
});
