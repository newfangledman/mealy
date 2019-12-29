export default (sequelize, DataTypes) => {
  const MealIngredient = sequelize.define("mealingredient", {
    meal_ingredient_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    meal_id: DataTypes.INTEGER(11),
    ingredient_id: DataTypes.INTEGER(11)
  });
  return MealIngredient;
};
