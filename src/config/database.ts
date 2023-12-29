import { Sequelize, Dialect } from "sequelize";
import config from "./database.config";

const { DB, USER, PASSWORD, HOST, dialect, pool } = config;

if (typeof dialect !== "string") {
  throw new Error("Invalid database dialect");
}

const dbMySql = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect as Dialect,
  pool,
});

dbMySql
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default dbMySql;
