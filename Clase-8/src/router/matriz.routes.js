import { Router } from "express";
import { matrizController } from "../controller/matriz.controller.js";

 const matrizRouter = Router();

matrizRouter.get('/', matrizController);

export default matrizRouter;