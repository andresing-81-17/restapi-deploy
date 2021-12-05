import express from "express";
import TasksRoutes from "./routes/tasks.router";
import morgan from "morgan";
import cors from "cors";

const app = express();

//setting
app.set("port", process.env.PORT || 3000);

//niddLewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my aplication" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
