import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import Models from '../database/models/user.model';
import { Response } from '../types/Response';

const LoginService = async (username: string, password: string): Promise<Response<string>> => {
  try {
    const user = await Models.findOne({ where: { username } });
    
    if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Username or password invalid' },
      };
    }
    
    const token = jwt.sign({ id: user.dataValues.id, username });
    return { status: 'SUCCESS', data: token };
  } catch (error) {
    return {
      status: 'UNAUTHORIZED',
      data: { message: 'An error occurred during login' },
    };
  }
};

export default { LoginService };
