export default (sequelize, DataTypes) => {
  
  const Meal = sequelize.define('meal', {
    meal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {underscored: true});

  Meal.associate = function(models) {
    Meal.belongsToMany(models.Ingredient, {
      through: models.MealIngredient,
      as: 'MealInIngredient',
    })
  };
  
  return Meal;
};