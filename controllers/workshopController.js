import Workshop from "../models/Workshop";

//create wrokshop

export const createWorkshop = async (req, res) => {
  const newWorkshop = new Workshop(req.body);

  try {
    const createdWorkshop = await newWorkshop.save();
    res.status(200).json({
      message: "Workshop created successfully",
      data: createdWorkshop,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
