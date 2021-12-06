import { Router } from "express";
import * as servicesController from "../controllers/services.controller";
import * as workshopController from "../controllers/workshop.controller";
const router = Router();

router.post("/services", servicesController.postCreateServices);

router.get("/services", servicesController.getFindAllServices);

router.get("/services/:s_id", servicesController.getFindOneServices);

router.delete("/services/:s_id", servicesController.deleteServices);

router.put("/services/:s_id", servicesController.updateServices);

router.post("/workshops", workshopController.postCreateWorkshop);

router.get("/workshops", workshopController.getFindAllWorkshop);

router.put("/assignServices/:_id", workshopController.updateWorkshopServices);



export default router;
