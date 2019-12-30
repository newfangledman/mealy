export default (sequelize, DataTypes) => {
  const MealStep = sequelize.define("mealstep", {
    meal_step_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    meal_id: DataTypes.INTEGER(11),
    step_id: DataTypes.INTEGER(11)
  });
  return MealStep;
};
