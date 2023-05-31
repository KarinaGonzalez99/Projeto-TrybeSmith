import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: string,
  username: string,
};

function sign(payload: TokenPayload): string {
  return jwt.sign(payload, secret);
}

export default {
  sign,
};