import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Post from '../app/models/Post';
import Client from '../app/models/Client';

const models = [User, Post, Client];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    if (process.env.NODE_ENV === 'test') {
      this.connection = new Sequelize({
        dialect: databaseConfig.dialect,
        storage: databaseConfig.storage,
        define: databaseConfig.define,
      });
    } else {
      this.connection = new Sequelize(databaseConfig);
    }

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
