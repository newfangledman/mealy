export default (sequelize, DataTypes) => {
  const IngredientAmount = sequelize.define(
    "ingredientamount",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      amount_id: DataTypes.INTEGER,
      ingredient_id: DataTypes.INTEGER
    },
    { underscored: true }
  );
  return IngredientAmount;
};