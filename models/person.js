module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
      name: {
    // Giving the Person model a name of type STRING
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1,100]
    }
  }
  });

  Person.associate = function(models) {
    // Associating Person with Burgers
    // When an Person is deleted, also delete any associated Burgers
    Person.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };
  return Person;
};
