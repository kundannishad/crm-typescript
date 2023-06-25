import { Request, Response, NextFunction } from "express";

const allowHeadersMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
};

export default allowHeadersMiddleware;
