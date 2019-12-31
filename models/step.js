export default (sequelize, DataTypes) => {
  const Step = sequelize.define(
    "step",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      number: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT("long")
    },
    { underscored: true }
  );
  Step.associate = function(models) {
    Step.belongsToMany(models.meal, {
      through: models.mealstep,
      foreignKey: "id"
    });
  };
  return Step;
};
