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
    const { limit, page, name, email } = request.query;
    const where = {};

    if (!page || !limit) {
      return response.status(400).json({
        message: 'Invalid params',
      });
    }

    if (name) {
      where.name = name;
    }

    if (email) {
      where.email = email;
    }

    const users = await User.findAndCountAll({
      where,
      limit,
      offset: limit * (page - 1),
      attributes: ['uid', 'name', 'email'],
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: ['uid', 'content'],
        },
      ],
      order: [['uid', 'asc']],
    });

    return response.json(users);
  }
  async store(request, response) {
    const { name, email, password } = request.body;

    const user = await User.create({ name, email, password });

    return response.json(user);
  }
  async update(request, response) {
    const { uid } = request.params;
    const { name, email } = request.body;
    const parsed = Number.parseInt(uid);

    if (Number.isNaN(parsed)) {
      return response.status(400).json({
        message: 'invalid ID',
      });
    }

    if (!name || !email) {
      return response.status(400).json({
        message: 'invalid data',
      });
    }

    const user = await User.update(
      { name, email },
      { where: { uid: parsed }, returning: true }
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
