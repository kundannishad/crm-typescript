"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconfig_1 = require("./config/dbconfig");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Use the value of PORT environment variable or default to 3000
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dbconfig_1.sequelize.authenticate();
            console.log('Database connection has been established successfully.');
            // Create a new user
            const userObject = {
                FirstName: 'John',
                LastName: 'Doe',
                MobileNo: '1234567890',
                UserName: 'johndoe',
                Email: 'john@example.com',
                // Add other properties as needed
            };
            const newUser = yield dbconfig_1.User.create(userObject);
            console.log('New user created:', newUser.toJSON());
        }
        catch (error) {
            console.error('Failed to establish database connection:', error);
            // Handle the error or terminate your application if needed
            // ...
        }
        finally {
            yield dbconfig_1.sequelize.close(); // Close the database connection
        }
    });
}
createUser();
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
