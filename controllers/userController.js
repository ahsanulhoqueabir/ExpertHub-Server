import User from "../models/User";

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "User cant be created, please try again later.",
    });
  }
};

export { createUser };
