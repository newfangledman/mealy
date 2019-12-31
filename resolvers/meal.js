// import db from "../models";
// const { ingredient, meal, step } = db;
export default {
  Query: {
    meals() {
      return db.meal.findAll();
    },
    meal(_, {id}, {db}) {
      return db.meal.findOne({where: { id }});
    },
  },
  Meal: {

  }
};

const associations = {
  include: []
};
