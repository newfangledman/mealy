export default (sequelize, DataTypes) => {
  const Step = sequelize.define(
    "step",
    {
      step_id: {
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
  Step.associate = function(models) {
    Step.belongsToMany(models.meal, {
      through: models.mealstep,
      as: "StepsForMeal",
      foreignKey: "step_id"
    });
  };
  return Step;
};
