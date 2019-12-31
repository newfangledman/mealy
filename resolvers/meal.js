import db from "../models";
const { ingredient, meal, step } = db;
export default {
  meals() {
    return meal.findAll({
      ...associations
    });
  },
  meal(_, { id }) {
    return meal.findOne({
      where: { id },
      ...associations
    });
  }
};

const associations = {
  include: [

 step,

 ingredient

  ]
};
