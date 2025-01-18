'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi dengan model ListMenus
      Images.belongsTo(models.ListMenus, { foreignKey: 'list_menu_id' }); // pastikan nama kolom konsisten dengan konvensi
    }
  }
  
  // Inisialisasi model
  Images.init({
    image: DataTypes.STRING,
    list_menu_id: DataTypes.INTEGER // Gunakan penulisan snake_case untuk kolom
  }, {
    sequelize,
    modelName: 'Images',
  });
  
  return Images;
};
