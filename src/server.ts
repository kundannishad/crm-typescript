import app from './app'
import dbMySql from './config/database'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000 // Use the value of PORT environment variable or default to 3000

app.listen(port, () => {
	console.log("server is running on port " + port);
});
