module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,200]
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    // We're saying that a Burger should belong to an Person
    // A Burger can't be created without an Person due to the foreign key constraint
    Burger.belongsTo(models.Person, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Burger;
};
