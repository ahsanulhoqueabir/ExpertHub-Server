import Workshop from "../models/Workshop.js";
//create wrokshop

export const createWorkshop = async (req, res) => {
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
// export default createWorkshop;
