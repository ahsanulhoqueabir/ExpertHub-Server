import expert from "../models/Expert.js";

const makeExpert = async (req, res) => {
  const newExpert = new expert(req.body);
  try {
    await newExpert.save();
    res.status(200).json({
      message: "Expert created successfully",
      data: newExpert,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export { makeExpert };
