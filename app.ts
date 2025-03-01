import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Request, Response } from "express";
import routes from "./routes/routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended : true }));

app.use("", routes);

dotenv.config();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)  
});