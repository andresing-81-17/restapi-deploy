import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected to: ", db.connection.name);
    console.log("Database is connected to: ", db.connection);
  } catch (error) {
    console.error(error);
  }
})();
