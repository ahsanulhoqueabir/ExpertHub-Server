import express from "express";
import { register } from "../controllers/GeneralUserController.js";
const router = express.Router();
router.post("/register", register);
export default router;
