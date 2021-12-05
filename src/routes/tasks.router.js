import { Router } from "express";
import * as servicesController from "../controllers/services.controller";
const router = Router();

router.post("/", servicesController.postCreateServices);

router.get("/", servicesController.getFindAllServices);

router.get("/:s_id", servicesController.getFindOneServices);

router.delete("/:s_id", servicesController.deleteServices);

router.put("/:s_id", servicesController.updateServices);

export default router;
