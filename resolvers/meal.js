import mealService from "../services";
export default {
  Query: {
    meals(_, args, { db }) {
      return db.meal.findAll();
    },
    meal(_, { id }, { db }) {
      return db.meal.findOne({ where: { id } });
    }
  },
  Meal: {
    steps(parent, args) {
      console.log(parent);
    },
    ingredients(parent, args) {
      console.log(parent)
    }
  }
};
