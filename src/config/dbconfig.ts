import { Sequelize } from 'sequelize';

const db = new Sequelize('pospcrmnode', 'root', 'Password', {
	host: 'localhost',
	dialect: 'mysql',
});

export default db;

// import { Sequelize, Op } from 'sequelize';
// import dotenv from 'dotenv';
// dotenv.config();

// // Variable to hold all models
// const dbMySql: any = {}; // You can replace `any` with appropriate types for your models

// const host = process.env.DB_HOST;
// const database = process.env.DB_DATABASE;
// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;

// if (!host || !database || !username || !password) {
//     throw new Error('Missing required environment variables');
// }

// const sequelize = new Sequelize(database, username, password, {
//     host: host,
//     dialect: 'mysql',
//     operatorsAliases: {},
//    // timezone: 'Asia/Kolkata',
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     logging: console.log,
//     define: {
//         timestamps: false
//     }
// });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch((err) => {
//         console.error('DBMySql Connection failed:', err);
//     });

// dbMySql.Sequelize = Sequelize;
// dbMySql.sequelize = sequelize;
// dbMySql.Operator = Op;

// export default dbMySql;
