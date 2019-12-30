export default (sequelize, DataTypes) => {
  const MealIngredient = sequelize.define("mealingredient", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    meal_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  },
  { underscored: true });
  return MealIngredient;
};
