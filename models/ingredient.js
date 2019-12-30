export default (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "ingredient",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT("long")
    },
    { underscored: true }
  );
  Ingredient.associate = function(models) {
    Ingredient.belongsToMany(models.meal, {
      through: models.mealingredient,
      foreignKey: "ingredient_id"
    });
  };
  return Ingredient;
};
