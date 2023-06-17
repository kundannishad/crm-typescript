import { body, param, query } from 'express-validator';

class UserValidator {

    checkCreateUser() {
        return [
            body('id')
                .optional()
                .isUUID(4)
                .withMessage('The value should be UUID v4'),
            body('FirstName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            body('LastName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            body('MobileNo')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            body('Email')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            body('UserName')
                .notEmpty()
                .withMessage('The title value should not be empty'),
            body('Password')
                .notEmpty()
                .withMessage('The password field is required')
                .isLength({ min: 8 })
                .withMessage('The password must be at least 8 characters')
                .matches(/[-_$#]/)
                .withMessage('The password must contain a symbol (-, _, $, or #)'),

            body('completed')
                .optional()
                .isBoolean()
                .withMessage('The value should be boolean')
                .isIn([0, false])
                .withMessage('The value should be 0 or false'),
        ];
    }
    checkReadUser() {
        return [
            query('limit')
                .optional()
                .isInt({ min: 1, max: 10 })
                .withMessage('The limit value should be number and between 1-10'),
            query('offset')
                .optional()
                .isNumeric()
                .withMessage('The value should be number'),
        ];
    }
    checkIdParam() {
        return [
            param('Id')
                .notEmpty()
                .withMessage('The value should be not empty')
                .withMessage('The value should be uuid v4'),
        ];
    }
}

export default new UserValidator();