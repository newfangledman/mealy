export default (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "ingredient",
    {
      ingredient_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    { underscored: true }
  );
  Ingredient.associate = function(models) {
    Ingredient.belongsToMany(models.meal, {
      through: models.mealingredient,
      as: "IngredientsForMeal",
      foreignKey: "ingredient_id"
    });
  };
  return Ingredient;
};
