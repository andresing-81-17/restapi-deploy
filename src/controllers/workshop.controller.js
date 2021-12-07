import workshops from "../models/Workshops";
import { getPagination } from "../libs/getPagination";
import { json } from "express";

export const getFindAllWorkshop = async (req, res) => {
  try {
    const data = await workshops.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the services",
    });
  }
};

export const postCreateWorkshop = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newWorkshop = new workshops({
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      type: req.body.type,
      votos: req.body.votos,
      services: req.body.services,
    });
    const workshopSave = await newWorkshop.save();
    res.json(workshopSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the services",
    });
  }
};


