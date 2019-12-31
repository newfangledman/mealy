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
  },
  Meal: {
    id(obj){
      return obj.id
    },
    name(obj){
      return obj.name
    },
    description(obj){
      return obj.description
    }
  }
};