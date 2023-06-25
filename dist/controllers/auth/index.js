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
exports.AuthApiController = void 0;
const auth_1 = require("./../../models/auth");
class AuthApiController {
    details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id, 10);
                const result = yield auth_1.AuthModel.getById(id);
                res.status(200).send(result);
            }
            catch (error) {
                // Handle the error appropriately
                res.status(500).json({ error: error });
            }
        });
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AuthApiController = AuthApiController;
