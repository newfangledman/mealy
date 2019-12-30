import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const playground = {
  settings: {
    "editor.cursorShape": "line"
  }
};

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db },
  playground
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("client"));

db.sequelize.sync().then(() => {
  // populate meal table with dummy data
  db.meal.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName(),
      description: faker.lorem.sentence()
    }))
  );
  // populate post table with dummy data
  db.ingredient.bulkCreate(
    times(10, () => ({
      name: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
    }))
  );
    
  db.mealingredient.bulkCreate(
    times(10, () => ({
      meal_id: random(1,10),
      ingredient_id: random(1,10),
    }))
  )
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});