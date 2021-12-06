import Services from "../models/Services";
import { getPagination } from "../libs/getPagination";

export const getFindAllServices = async (req, res) => {  
  try {
    const { size, page, name } = req.query;

    const condition = name
      ? {
          s_name: { $regex: new RegExp(name), $options: 'i' },
        }
      : {};
    console.log(condition);
    const { limit, offset } = getPagination(page, size);

    const data = await Services.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      services: data.docs,
      totalPages: data.totalPages - 1,
      currentPage: data.currentPage
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the services",
    });
  }
};

export const postCreateServices = async (req, res) => {
  if (!req.body.s_id) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newService = new Services({
      s_id: req.body.s_id,
      s_name: req.body.s_name,
    });
    const servicesSave = await newService.save();
    res.json(servicesSave);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the services",
    });
  }
};

export const getFindOneServices = async (req, res) => {
  try {
    const id = req.params;

    const oneService = await Services.findOne(id);

    if (!oneService)
      return res
        .status(400)
        .json({ message: `Task with id ${req.params.s_id} does not exists` });

    res.json(oneService);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Error Petrieving Services withid ${req.params.s_id}`,
    });
  }
};

export const deleteServices = async (req, res) => {
  try {
    await Services.find(req.params).remove().exec();
    res.json({
      message: "El servicio se a eliminado corectamente",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Cannot delete services withid ${req.params.s_id}`,
    });
  }
};

export const updateServices = async (req, res) => { 
  await Services.findOneAndUpdate(req.params, req.body);
  res.json({ message: "Sevices was updated Successfully" });
};
