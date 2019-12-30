export default (sequelize, DataTypes) => {
  const MealStep = sequelize.define(
    "mealstep",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      meal_id: DataTypes.INTEGER,
      step_id: DataTypes.INTEGER
    },
    { underscored: true }
  );
  return MealStep;
};
