"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class UserValidator {
    checkCreateUser() {
        return [
            (0, express_validator_1.body)('id')
                .optional()
                .isUUID(4)
                .withMessage('The value should be UUID v4'),
            (0, express_validator_1.body)('FirstName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('LastName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('MobileNo')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('Email')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('UserName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            (0, express_validator_1.body)('Password')
                .notEmpty()
                .withMessage('The password field is required')
                .isLength({ min: 8 })
                .withMessage('The password must be at least 8 characters')
                .matches(/[-_$#]/)
                .withMessage('The password must contain a symbol (-, _, $, or #)'),
            (0, express_validator_1.body)('completed')
                .optional()
                .isBoolean()
                .withMessage('The value should be boolean')
                .isIn([0, false])
                .withMessage('The value should be 0 or false'),
        ];
    }
    checkReadUser() {
        return [
            (0, express_validator_1.query)('limit')
                .optional()
                .isInt({ min: 1, max: 10 })
                .withMessage('The limit value should be number and between 1-10'),
            (0, express_validator_1.query)('offset')
                .optional()
                .isNumeric()
                .withMessage('The value should be number'),
        ];
    }
    checkIdParam() {
        return [
            (0, express_validator_1.param)('Id')
                .notEmpty()
                .withMessage('The value should be not empty')
                .withMessage('The value should be uuid v4'),
        ];
    }
}
exports.default = new UserValidator();
