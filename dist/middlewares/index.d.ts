import { Request, Response, NextFunction } from "express";
declare class Middleware {
    handleValidationError(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
declare const _default: Middleware;
export default _default;
