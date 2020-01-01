// import db from "../models";
// const { ingredient, meal, step } = db;
export default {
  Query: {
    meals(_, args, {db}) {
      return db.meal.findAll();
    },
    meal(_, {id}, {db}) {
      return db.meal.findOne({where: { id }});
    },
  }
};