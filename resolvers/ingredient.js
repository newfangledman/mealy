import db from "../models";
const { ingredient, meal, mealingredient } = db;
export default {
  Query: {
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
  }
};