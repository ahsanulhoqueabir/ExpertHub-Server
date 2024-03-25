import express from "express";
const router = express.Router();
import { makeExpert } from "../controllers/expertController.js";
router.post("/beExpert", makeExpert);
export default router;
