import { NextFunction, Request, Response } from 'express';

function requestHandler(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    res.json({
        message: 'hit me from ' + req.originalUrl,
        ip: req.ips[0],
    });
}

export { requestHandler };
