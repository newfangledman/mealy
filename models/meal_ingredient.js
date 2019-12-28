 export default (sequelize, DataTypes) => {
  const MealIngredient = sequelize.define('meal_ingredient');
  return MealIngredient;
};
