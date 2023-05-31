import { Request, Response } from 'express';
import LoginService from '../service/login';

const LoginController = async (req: Request, res: Response): Promise<Response> => {
  const resp = await LoginService.LoginService(req.body.username, req.body.password);
  
  return resp.status === 'UNAUTHORIZED'
    ? res.status(401).json(resp.data)
    : res.status(200).json({ token: resp.data });
};

export default { LoginController };
