import { Request, Response, NextFunction } from 'express';

export const CORS = (req: Request, res: Response, next: NextFunction) => {
	res.set('Access-Control-Allow-Headers', 'Cookie, Content-Type');
	res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.set('Access-Control-Allow-Credentials', 'true');
	next();
};
