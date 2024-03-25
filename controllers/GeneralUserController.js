import GeneralUser from "../models/GeneralUser.js";

const register = async (req, res) => {
  const newUser = new GeneralUser(req.body);
  try {
    await newUser.save();
    res.status(200).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "User cant be created, please try again later.",
    });
  }
};
export { register };
