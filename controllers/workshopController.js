import Workshop from "../models/Workshop.js";
//create wrokshop

const createWorkshop = async (req, res) => {
  const newWorkshop = new Workshop(req.body);

  try {
    await newWorkshop.save();
    res.status(200).json({
      message: "Workshop created successfully",
      data: newWorkshop,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.status(200).json({
      message: "Workshops found successfully",
      data: workshops,
    });
  } catch (error) {
    res.status(500).json({ message: "Invalid Route" });
  }
};

const getWorkshopById = async (req, res) => {
  const { id } = req.params;
  try {
    const workshop = await Workshop.findById(id);
    res.status(200).json({
      message: "Workshop found successfully",
      data: workshop,
    });
  } catch (error) {
    res.status(500).json({ message: "No such  workshop exists with  this ID" });
  }
};
const updateWorkshop = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const options = { new: true };
  try {
    const updatedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      updates,
      options
    );
    res.status(200).json(updatedWorkshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteWorkshop = async (req, res) => {
  const { id } = req.params;
  try {
    await Workshop.findByIdAndDelete(id);
    res.status(200).json({ message: "Workshop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createWorkshop,
  getAllWorkshops,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop,
};
