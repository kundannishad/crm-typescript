import express from 'express'
import UserValidator from './../../validators/user'
import Middleware from './../../middlewares'

import UserController from '../../controllers/user'

const router = express.Router()

router.post(
	'/create',
	UserValidator.checkCreateUser(),
	Middleware.handleValidationError,
	UserController.create
);

router.get(
	'/read',
	UserValidator.checkReadUser(),
	Middleware.handleValidationError,
	UserController.readPagination
);

router.get(
	'/read/:Id',
	UserValidator.checkIdParam(),
	Middleware.handleValidationError,
	UserController.readByID
);

router.put(
	'/update/:Id',
	UserValidator.checkIdParam(),
	Middleware.handleValidationError,
	UserController.update
);

router.delete(
	'/delete/:Id',
	UserValidator.checkIdParam(),
	Middleware.handleValidationError,
	UserController.delete
);

export default router
