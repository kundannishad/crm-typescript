import { Request, Response } from "express";
declare class AuthApiController {
    details(req: Request, res: Response): Promise<void>;
    signup(req: Request, res: Response): Promise<void>;
}
export { AuthApiController };
