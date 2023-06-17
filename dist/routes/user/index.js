"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import TodoValidator from '../validator';
//import Middleware from '../../middleware';
//import TodoController from '../controller';
const user_1 = __importDefault(require("../../controllers/user"));
const router = express_1.default.Router();
router.post('/create', 
//TodoValidator.checkCreateTodo(),
//Middleware.handleValidationError,
user_1.default.create);
// router.get(
// 	'/read',
// 	TodoValidator.checkReadTodo(),
// 	Middleware.handleValidationError,
// 	TodoController.readPagination
// );
// router.get(
// 	'/read/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.readByID
// );
// router.put(
// 	'/update/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.update
// );
// router.delete(
// 	'/delete/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.delete
// );
exports.default = router;
