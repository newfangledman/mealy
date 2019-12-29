require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
export const modelConfig = { timestamp: true, underscored: true };
export default {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mariadb",
    operatorsAliases: false
  },
  test: {},
  production: {}
};
