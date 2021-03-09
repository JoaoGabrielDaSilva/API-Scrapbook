import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.DataTypes.VIRTUAL,
        },
        password_hash: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        schema: 'scrapbook',
        tablename: 'users',
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
  static associate(models) {
    this.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'user_uid',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
