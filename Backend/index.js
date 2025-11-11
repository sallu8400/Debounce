import express from "express";
import dotenv from "dotenv";
import { mongoCon } from "./src/config/db.js";
import ProductRoute from "./route/ProductRoute.js";

//mongo cnnetion
dotenv.config();
const app = express();

//middleware
app.use(express.json());

mongoCon(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Api is Running");
});     


//product


app.use("/api/product",ProductRoute)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port Number ${PORT}`);
});
