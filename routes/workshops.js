import express from "express";
import { createWorkshop } from "../controllers/workshopController";

const router = express.Router();

router.post("/", createWorkshop);

//router.get("/:id", );

export default router;
