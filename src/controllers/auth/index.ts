import { Request, Response } from "express";
import { AuthModel } from './../../models/auth'
import { ResponseHelper } from "../../helpers/responseHelper";

import jwt from "jsonwebtoken";

import { secret } from "../../config/auth";




class AuthApiController {

  async details(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id, 10);
      const result = await AuthModel.getById(id);
      const message = "User Retrive successfully !"
      ResponseHelper.sendSuccess(res, result, message);

    } catch (error: any) {
      ResponseHelper.sendError(res, error.message);
    }
  }

  async signup(req: Request, res: Response): Promise<void> {
    var token = jwt.sign({ id: 1 }, secret, {
      expiresIn: 86400
    });

    const message = "User Retrive successfully !"
    ResponseHelper.sendSuccess(res, token, message);
  }
}


export { AuthApiController };


