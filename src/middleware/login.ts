import { Request, Response, NextFunction } from 'express';

const LoginMiddleware = (req: Request, res: Response, next: NextFunction): 
Response<void, Record<string, void>> | undefined => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: '"username" and "password" are required' });
  }
   
  next();
  return undefined;
};

export default LoginMiddleware; // teste