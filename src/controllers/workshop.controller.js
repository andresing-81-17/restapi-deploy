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

export const updateWorkshopVote = async (req, res) => {
  
  const filter = { id: req.params.id };
  
  const updateVote = await workshops.findOneAndUpdate(filter, req.body, {
    new: true,
    upsert: true,
    rawResult: true
  });
  res.json(updateVote.value);
};

export const deleteWorkshop = async (req, res) => {
  try {
    await workshops.find(req.params).remove().exec();
    res.json({
      message: "La tienda se a eliminado corectamente",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Cannot delete services withid ${req.params.s_id}`,
    });
  }
};
