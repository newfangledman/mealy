import db from "../models";
const { ingredient, meal, mealingredient } = db;
export default {
  ingredients() {
    return ingredient.findAll({
      ...associations
    });
  },
  ingredient(_, { id }) {
    return ingredient.findOne({
      where: { id },
      ...associations
    });
  }
};

const associations = {
  include: [
    {
      model: meal,
      as: "meals"
    }
  ]
};
