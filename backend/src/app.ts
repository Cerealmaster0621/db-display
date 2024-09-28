import express, { Application } from "express";
import stationRouter from "./routes/station";
import dotenv from "dotenv";

// dotenv setup
dotenv.config({ path: ".env.local" });

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/station", stationRouter);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
