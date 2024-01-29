import dotenv from "dotenv";
import connectDB from "./db/db_connect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("app is failed in running", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log("app is running on port : ", process.env.PORT);
    });
  })

  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
