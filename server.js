const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000; 
const DB_URL = process.env.DB_URL;

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("MongoDB is running");
		app.listen(PORT, () => {
			console.log("Server is running. Use our API on port: " + PORT);
		});
	})
	.catch((error) => console.log("error: " + error));
