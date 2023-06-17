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
Object.defineProperty(exports, "__esModule", { value: true });
//import { v4 as uuidv4 } from 'uuid'
const user_1 = require("../../mysql/user");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield user_1.UserInstance.create(Object.assign({}, req.body));
                return res.json({ record, msg: 'Successfully create User' });
            }
            catch (error) {
                // Handle specific errors or log them for debugging purposes
                console.error('Failed to create user:', error);
                // Return an appropriate error response with a specific status code
                return res.status(500).json({ msg: 'Failed to create user', error });
            }
        });
    }
}
exports.default = new UserController();
