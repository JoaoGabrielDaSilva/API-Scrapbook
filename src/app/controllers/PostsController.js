import Post from '../models/Post';

class PostsController {
  async show(request, response) {
    const { uid } = request.params;

    const post = await Post.findByPk(uid, {
      attributes: ['uid', 'content', 'user_uid'],
    });

    return response.json(post);
  }

  async index(request, response) {
    const posts = await Post.findAll({
      attributes: ['uid', 'content', 'user_uid'],
    });

    return response.json(posts);
  }

  async store(request, response) {
    const { content, user_uid } = request.body;
    const post = await Post.create({ content, user_uid });
    response.json(post);
  }

  async update(request, response) {
    const { uid } = request.params;
    const { content } = request.body;

    const post = await Post.update(
      { content },
      { where: { uid }, returning: true }
    );

    return response.json(post);
  }
  async delete(request, response) {
    const { uid } = request.params;

    await Post.destroy({
      where: { uid },
    });

    return response.sendStatus(202);
  }
}

export default new PostsController();
