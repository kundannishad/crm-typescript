import app from './app'
import dbMySql from './config/dbconfig'
import dotenv from 'dotenv'
dotenv.config()
dbMySql.Sequelize;

const port = process.env.PORT || 3000 // Use the value of PORT environment variable or default to 3000

app.listen(port, () => {
	console.log("server is running on port " + port);
});
