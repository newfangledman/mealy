import ingredientResolver from "./ingredient";
import mealResolver from "./meal";
export default {
  Query: {
    ...ingredientResolver,
    ...mealResolver
  }
};
