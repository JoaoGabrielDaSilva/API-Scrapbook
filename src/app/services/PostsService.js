import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class PostsService extends BaseService {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute();
    return result;
  }

  async getPost() {
    const result = await this.execute();
    return result;
  }

  async store() {
    const result = await this.execute();
    return result;
  }

  async update() {
    const result = await this.execute();
    return result;
  }

  async delete() {
    const result = await this.execute();
    return result;
  }
}
