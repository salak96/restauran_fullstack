'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi dengan model Users
      Orders.belongsTo(models.Users, { foreignKey: 'user_id' });
      // Mendefinisikan asosiasi dengan model ListOrders
      Orders.hasMany(models.ListOrders, { foreignKey: 'order_id' });
    }
  }

  // Inisialisasi model Orders
  Orders.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Pastikan kolom ini tidak boleh null
    },
    no_table: {
      type: DataTypes.INTEGER,
      allowNull: false, // Pastikan kolom ini tidak boleh null
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false, // Pastikan kolom ini tidak boleh null
    },
    order_type: DataTypes.BOOLEAN,
    sub_total: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    no_order: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders',  // Pastikan ini sesuai dengan nama tabel di database
  });

  return Orders;
};
