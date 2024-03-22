import User from "../models/User.js";
export const register = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(200).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "User cant be created, please try again later.",
      
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      message: "Login successful",
      data: user,
    });
  } catch (err) {
    console.log("Error in Login : ", err);
    res.status(500).json({ message: "Login failed" });
  }
};
