import BaseService from './BaseService';
import { QueryTypes } from 'sequelize';

export default class UserService extends BaseService {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from aluno', QueryTypes.SELECT);
    return result;
  }

  async getUser() {
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
