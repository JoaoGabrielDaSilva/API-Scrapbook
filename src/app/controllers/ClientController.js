import Client from '../models/Client';

class ClientController {
  async store(request, response) {
    const { name, uf } = request.body;

    if (!name || !uf) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    const client = await Client.create({ name, uf });

    return response.sendStatus(client);
  }
}

export default new ClientController();
