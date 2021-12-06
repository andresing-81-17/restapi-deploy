import { config } from "dotenv";
config();

export default {
  // mongodbURL: process.env.MONGODB_URI || "mongodb://Localhost/tasksdb",
  mongodbURL: "mongodb+srv://geouser:E438HNlXKIg9RbYE@cluster0.m9kbz.mongodb.net/geobikedb?retryWrites=true&w=majority"
}
