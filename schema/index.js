import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from "graphql";

const mealType = new GraphQLObjectType({
  name: "Meal",
  fields: {
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});

const ingredientType = new GraphQLObjectType({
  name: "Ingredient",
  fields: {
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    meal: {
      type: mealType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (source, { id }) => {
        return "meal";
      }
    },
    meals: {
      type: new GraphQLList(mealType),
      resolve: () => {
        return "meals";
      }
    }
  }
});

export default new GraphQLSchema({
  query: queryType
});
