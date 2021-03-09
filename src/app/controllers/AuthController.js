import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class AuthController {
  async login(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return response
        .status(401)
        .json({ message: 'Login ou senha inválido(s)' });
    }

    if (!(await user.checkPassword(password))) {
      return response
        .status(401)
        .json({ message: 'Login ou senha inválido(s)' });
    }

    return response.json({
      message: 'Sucesso no Login!',
      user,
      token: jwt.sign({ uid: user.uid }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new AuthController();
