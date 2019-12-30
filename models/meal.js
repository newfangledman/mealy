export default (sequelize, DataTypes) => {
  const Meal = sequelize.define(
    "meal",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT('long')
    },
    { underscored: true }
  );

  Meal.associate = function(models) {
    Meal.belongsToMany(models.ingredient, {
      through: models.mealingredient,
      as: "MealInIngredient",
      foreignKey: "id"
    });
    Meal.belongsToMany(models.step, {
      through: models.mealstep,
      as: "MealInStep",
      foreignKey: "id"
    });
  };

  return Meal;
};