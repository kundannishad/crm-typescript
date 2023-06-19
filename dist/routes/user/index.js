"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./../../validators/user"));
const middlewares_1 = __importDefault(require("./../../middlewares"));
const user_2 = __importDefault(require("../../controllers/user"));
const router = express_1.default.Router();
router.post('/create', user_1.default.checkCreateUser(), middlewares_1.default.handleValidationError, user_2.default.create);
router.get('/read', user_1.default.checkReadUser(), middlewares_1.default.handleValidationError, user_2.default.readPagination);
router.get('/read/:Id', user_1.default.checkIdParam(), middlewares_1.default.handleValidationError, user_2.default.readByID);
router.put('/update/:Id', user_1.default.checkIdParam(), middlewares_1.default.handleValidationError, user_2.default.update);
router.delete('/delete/:Id', user_1.default.checkIdParam(), middlewares_1.default.handleValidationError, user_2.default.delete);
exports.default = router;
