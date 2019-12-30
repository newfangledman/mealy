
export default `
  type Meal {
    id: ID!
    type: String!
    ingredients: [Ingredient!]!
    steps: [Step!]!
  }
  type Ingredient {
    id: ID!
    name: String
    description: String!
    meals: [Meal!]!
  }
  type Step {
    id: ID!
    number: Int
    name: String
    description: String!
    meals: [Meal!]!
  }
  type Query {
    meals: [Meal!]!
    meal(id: ID!): Meal
    ingredients: [Ingredient!]!
    ingredient(id: ID!): Ingredient
    steps: [Step!]!
    step(id: ID!): Step
  }
  type Mutation {
    createMeal(name: String, description:String!): Ingredient!
    updateMeal(id: ID!, name: String, description:String!): [Int!]!
    deleteMeal(id: ID!): Int!
    createIngredient(name: String, description:String!, mealId: String): Ingredient!
    updateIngredient(id: ID!, name: String, description:String!): [Int!]!
    deleteIngredient(id: ID!): Int!
  }
`;
