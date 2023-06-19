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
const user_1 = require("../../mysql/user");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUserEmail = yield user_1.UserInstance.findOne({
                    where: { Email: req.body.Email }
                });
                if (existingUserEmail) {
                    return res.json({ msg: 'Email already exists', status: 400 });
                }
                const existingUserMobileNo = yield user_1.UserInstance.findOne({
                    where: { MobileNo: req.body.MobileNo }
                });
                if (existingUserMobileNo) {
                    return res.json({ msg: 'Mobile already exists', status: 400 });
                }
                const record = yield user_1.UserInstance.create(Object.assign({}, req.body));
                return res.json({ record, msg: 'Successfully create User' });
            }
            catch (error) {
                console.error('Failed to create user:', error);
                return res.status(500).json({ msg: 'Failed to create user', error });
            }
        });
    }
    readPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = req.query.limit || 10;
                const offset = req.query.offset;
                const records = yield user_1.UserInstance.findAll({ where: {}, limit, offset });
                return res.json(records);
            }
            catch (e) {
                return res.json({ msg: 'fail to read', status: 500, route: '/read' });
            }
        });
    }
    readByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Id } = req.params;
                const record = yield user_1.UserInstance.findOne({ where: { Id } });
                return res.json(record);
            }
            catch (e) {
                return res.json({ msg: 'fail to read', status: 500, route: '/read/:id' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Id } = req.params;
                const record = yield user_1.UserInstance.findOne({ where: { Id } });
                if (!record) {
                    return res.json({ msg: 'Can not find existing record' });
                }
                const updatedRecord = yield record.update({
                    Active: !record.getDataValue('Active'),
                    FirstName: req.body.FirstName
                });
                return res.json({ record: updatedRecord });
            }
            catch (e) {
                return res.json({
                    msg: 'fail to read',
                    status: 500,
                    route: '/update/:id'
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Id } = req.params;
                const record = yield user_1.UserInstance.findOne({ where: { Id } });
                if (!record) {
                    return res.json({ msg: 'Can not find existing record' });
                }
                const deletedRecord = yield record.destroy();
                return res.json({ record: deletedRecord });
            }
            catch (e) {
                return res.json({
                    msg: 'fail to read',
                    status: 500,
                    route: '/delete/:Id'
                });
            }
        });
    }
}
exports.default = new UserController();
