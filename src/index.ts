import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server rolling up and down like a rollercoaster on port ${port}`)
});