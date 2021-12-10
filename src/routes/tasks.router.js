import { Router } from "express";
import * as servicesController from "../controllers/services.controller";
import * as workshopController from "../controllers/workshop.controller";
import * as userVotesController from "../controllers/uservotes.controller";
import * as developerController from "../controllers/developer.controller";
const router = Router();

router.post("/api/services", servicesController.postCreateServices);

router.get("/api/services", servicesController.getFindAllServices);

router.get("/api/services/:s_id", servicesController.getFindOneServices);

router.delete("/api/services/:s_id", servicesController.deleteServices);

router.delete("/api/workshops/:id", workshopController.deleteWorkshop);

router.put("/api/services/:s_id", servicesController.updateServices);

router.put("/api/workshopvote/:id", workshopController.updateWorkshopVote);

router.post("/api/workshops", workshopController.postCreateWorkshop);

router.get("/api/workshops", workshopController.getFindAllWorkshop);

router.post("/api/uservotes", userVotesController.postUserVotes);

router.get("/Developer", developerController.getDeveloper);



export default router;
