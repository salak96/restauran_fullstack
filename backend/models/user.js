'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Menambahkan asosiasi di sini jika diperlukan, contoh:
      // User.hasMany(models.Orders, { foreignKey: 'user_id' });
    }
  }

  // Inisialisasi model User
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Pastikan kolom username tidak boleh null
      unique: true // Pastikan username unik
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false // Pastikan kolom fullname tidak boleh null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Pastikan kolom email tidak boleh null
      unique: true, // Pastikan email unik
      validate: {
        isEmail: true // Validasi format email
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false // Pastikan kolom password tidak boleh null
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
