import developer from "../models/Developer";

export const getDeveloper = async (req, res) => {
    try {
      const data = await developer.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong retrieving the user developer",
      });
    }
  };