import jwt, { VerifyCallback, Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { secret } from "../config/auth";

//const jwt = require("jsonwebtoken");


interface CustomRequest extends Request {
  userId?: string;
}

class AuthMiddleware {

    verifyToken(req: CustomRequest, res: Response, next: NextFunction): void {
        let token: string | undefined = req.headers["x-access-token"] as string;
    
        if (!token) {
           res.status(403).send({
            message: "No token provided!"
          });
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
              return res.status(401).send({
                message: "Unauthorized!"
              });
            }
            req.userId = (decoded as { id: string }).id;
            next();
          });
    }


    
    
    
}

export default new AuthMiddleware();
