'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ListOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi dengan model ListMenus
      ListOrders.belongsTo(models.ListMenus, { foreignKey: 'list_menu_id' });
      // Mendefinisikan asosiasi dengan model Orders
      ListOrders.belongsTo(models.Orders, { foreignKey: 'order_id' });
    }
  }

  // Inisialisasi model ListOrders
  ListOrders.init({
    list_menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Pastikan kolom ini tidak boleh null
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false, // Pastikan quantity tidak boleh null
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Pastikan kolom ini tidak boleh null
    }
  }, {
    sequelize,
    modelName: 'ListOrders',
  });

  return ListOrders;
};
