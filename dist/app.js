"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
//import cors from "cors";
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
//app.use(cors());
app.use(express_1.default.json());
app.use('/api/v1', (req, res) => {
    res.status(200).json({ message: 'Its Working fine.' });
});
app.use('/api/v1', user_1.default);
app.use('/api/v1/users', auth_1.default);
exports.default = app;
