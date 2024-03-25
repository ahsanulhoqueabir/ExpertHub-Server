import express from "express";
import {
  createWorkshop,
  getAllWorkshops,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop,
  getTags,
} from "../controllers/workshopController.js";
// const createWorkshop = require("../controllers/workshopController");

const router = express.Router();

router.post("/addNew", createWorkshop);
router.get("/all", getAllWorkshops);
router.get("/search/:id", getWorkshopById);
router.patch("/update/:id", updateWorkshop);
router.delete("/delete/:id", deleteWorkshop);
router.get("/getTags", getTags);

export default router;
