import workshops from "../models/Workshops";
import { getPagination } from "../libs/getPagination";

export const getFindAllWorkshop = async (req, res) => {
    console.log(workshops)
    const data = await workshops.find();
    res.json(data);
  };