import express from "express";
import models from "./models";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

models.sequelize.sync().then(() => {
  console.log("db");
});

var schema = buildSchema(`
  type Query {
    hello: String,
    test: String
  }
`);

var root = { hello: () => "Hello world!", test: () => "this is a test" };

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
