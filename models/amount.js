export default (sequelize, DataTypes) => {
  const Amount = sequelize.define(
    "amount",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      quantity: DataTypes.STRING,
      unit: DataTypes.TEXT("long")
    },
    { underscored: true }
  );
  Amount.associate = function(models) {
    Amount.belongsToMany(models.ingredient, {
      through: models.ingredientamount,
      foreignKey: "amount_id"
    });
  };
  return Amount;
};
