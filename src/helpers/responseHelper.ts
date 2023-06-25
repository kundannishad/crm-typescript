import { Response } from "express"


export class ResponseHelper {

    static sendSuccess(res: Response, data: any,message:string, statusCode = 200) {
        return res.status(statusCode).json({
          success: true,
          message,
          data,
        });
      }
    

    static sendError(res: Response, message: string, statusCode = 500) {
        return res.status(statusCode).json({
          success: false,
          error: message,
        });
      }
    
    
}

