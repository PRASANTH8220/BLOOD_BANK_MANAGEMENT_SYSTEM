import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/adminModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.error(err));

const seedAdmin = async () => {
  try {
    await Admin.deleteMany({ email: "admin@bbms.com" });

    const admin = new Admin({
      name: "Admin",
      email: "admin@bbms.com",
      password: "Admin@1234",  // will be hashed by model pre-save hook
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin seeded successfully");
    console.log("   Email: admin@bbms.com");
    console.log("   Password: Admin@1234");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
