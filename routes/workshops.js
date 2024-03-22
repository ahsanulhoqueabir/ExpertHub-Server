import express from "express";
import { createWorkshop } from "../controllers/workshopController.js";
// const createWorkshop = require("../controllers/workshopController");

const router = express.Router();

router.post("/addNew", createWorkshop);

//router.get("/:id", );

export default router;
