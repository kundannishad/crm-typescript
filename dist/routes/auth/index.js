"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./../../middlewares"));
const auth_1 = require("../../controllers/auth");
const authApiController = new auth_1.AuthApiController();
const router = express_1.default.Router();
router.get('/get/:id', 
//UserValidator.checkCreateUser(),
middlewares_1.default.handleValidationError, authApiController.details);
exports.default = router;
