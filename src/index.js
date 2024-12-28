import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error,", error);
      throw error;
    });
    app.listen(process.env.PORT || 7070, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection failed !!! ", error);
  });
