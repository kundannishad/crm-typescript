import dotenv from "dotenv";
dotenv.config();

const dbHostName: string | undefined = process.env.DB_HOST;
const dbDatabaseName: string | undefined = process.env.DB_DATABASE_NAME;
const dbUser: string | undefined = process.env.DB_USER;
const dbPassword: string | undefined = process.env.DB_PASSWORD;
const dialect: string | undefined = "mysql" as string | undefined;

if (!dbDatabaseName || !dbUser || !dbPassword || !dbHostName) {
  throw new Error("Missing or undefined database configuration");
}

const config = {
  HOST: dbHostName,
  USER: dbUser,
  PASSWORD: dbPassword,
  DB: dbDatabaseName,
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default config;
