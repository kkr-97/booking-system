import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_CONN_STRING;
if (!mongoURI) {
  throw new Error("MONGODB_CONN_STRING is not defined in .env file");
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/test", async (req, res) => {
  res.json({ message: "this msg is from end point" });
});

app.listen(3001, () => {
  console.log("Connected: 3001");
});
