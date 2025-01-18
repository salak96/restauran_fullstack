'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,  // Menambahkan validasi agar username tidak kosong
      },
      fullname: {
        type: Sequelize.STRING,  // Mengganti VARCHAR dengan STRING
        allowNull: false,        // Menambahkan validasi agar fullname tidak kosong
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,        // Menambahkan validasi agar email tidak kosong
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,        // Menambahkan validasi agar password tidak kosong
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
