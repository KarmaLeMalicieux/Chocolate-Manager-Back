import { Router } from "express";
import { postChocolate, getAllChocolate } from "../controller/chocolateController";

const chocolatesRouter = Router();

// get all articles
chocolatesRouter.get("/", getAllChocolate);
chocolatesRouter.post("/add", postChocolate);

export default chocolatesRouter;