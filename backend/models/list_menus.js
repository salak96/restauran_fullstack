'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ListMenus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi ListMenus dengan Images
      ListMenus.hasMany(models.Images, { foreignKey: 'list_menu_id' });
      // Mendefinisikan asosiasi ListMenus dengan ListOrders
      ListMenus.hasMany(models.ListOrders, { foreignKey: 'list_menu_id' });
    }
  }

  // Inisialisasi model ListMenus
  ListMenus.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ListMenus',
  });

  return ListMenus;
};
