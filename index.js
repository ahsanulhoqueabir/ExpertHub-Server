import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import workshopRoute from "./routes/workshops.js";
const port = 5000;

const app = express();
const corsOptions = { origin: true, Credential: true };

app.get("/", (req, res) => {
  res.send("Welcome to ExpertHub Server");
});

// mongoose.set("strictQuery", false);
const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://expert:1234@cluster0.e1jirkg.mongodb.net/experthub?retryWrites=true&&w=majority",
      {}
    );
    console.log("connected");
  } catch (err) {
    console.log("Error: ", err);
  }
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/workshops", workshopRoute);

app.listen(port, () => {
  connection();
  console.log(`Server is running at ${port}`);
});
