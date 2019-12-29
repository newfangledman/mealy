import express from "express";
import models from "./models";
import graphqlHTTP from "express-graphql";
import schema from "./schema"
import { buildSchema } from "graphql";

models.sequelize.sync().then(() => {
  console.log("db");
});

var root = { hello: () => "Hello world!", test: () => "this is a test" };

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
