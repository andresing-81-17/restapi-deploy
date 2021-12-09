import { Router } from "express";
import * as servicesController from "../controllers/services.controller";
import * as workshopController from "../controllers/workshop.controller";
import * as userVotesController from "../controllers/uservotes.controller";
const router = Router();

router.post("/services", servicesController.postCreateServices);

router.get("/services", servicesController.getFindAllServices);

router.get("/services/:s_id", servicesController.getFindOneServices);

router.delete("/services/:s_id", servicesController.deleteServices);

router.delete("/workshops/:id", workshopController.deleteWorkshop);

router.put("/services/:s_id", servicesController.updateServices);

router.put("/workshopvote/:id", workshopController.updateWorkshopVote);

router.post("/workshops", workshopController.postCreateWorkshop);

router.get("/workshops", workshopController.getFindAllWorkshop);

router.post("/uservotes", userVotesController.postUserVotes);



export default router;
