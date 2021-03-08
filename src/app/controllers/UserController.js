import User from '../models/User.js';
import Post from '../models/Post.js';

class UserController {
  async show(request, response) {
    const { uid } = request.params;
    const user = await User.findByPk(uid, {
      attributes: ['uid', 'name', 'email'],
    });
    return response.json(user);
  }
  async index(request, response) {
    const { limit = 5, offset = 5 } = request.query;
    const users = await User.findAndCountAll({
      limit,
      offset,
      attributes: ['uid', 'name', 'email'],
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: ['uid', 'content'],
        },
      ],
    });

    return response.json(users);
  }
  async store(request, response) {
    const { name, email } = request.body;

    const user = await User.create({ name, email });

    return response.json(user);
  }
  async update(request, response) {
    const { uid } = request.params;
    const { name, email } = request.body;

    const user = await User.update(
      { name, email },
      { where: { uid }, returning: true }
    );

    return response.json(user);
  }
  async delete(request, response) {
    const { uid } = request.params;
    await User.destroy({
      where: { uid },
    });
    return response.sendStatus(202);
  }
}

export default new UserController();
