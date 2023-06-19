import express from 'express'
import UserValidator from './../../validators/user'
import Middleware from './../../middlewares'

import { AuthApiController } from '../../controllers/auth'
const authApiController = new AuthApiController();


const router = express.Router()

router.get(
	'/get/:Id',
	//UserValidator.checkCreateUser(),
	Middleware.handleValidationError,
	authApiController.details
);


export default router
