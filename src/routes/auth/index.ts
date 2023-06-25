import express from 'express'
import UserValidator from './../../validators/user'
import Middleware from './../../middlewares'
import AuthMiddleware from './../../middlewares/authJwt'

import { AuthApiController } from '../../controllers/auth'
const authApiController = new AuthApiController();

import allowHeadersMiddleware from '../../middlewares/allowHeadersMiddleware'


const router = express.Router()

router.use(allowHeadersMiddleware);
router.get(
	'/get/:id',
	Middleware.handleValidationError,
	AuthMiddleware.verifyToken,
	authApiController.details
);

router.post(
	'/signup',
	//UserValidator.checkCreateUser(),
	//Middleware.handleValidationError,
	authApiController.signup
);


export default router
