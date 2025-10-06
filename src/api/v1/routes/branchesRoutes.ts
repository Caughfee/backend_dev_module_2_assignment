import express, { Router } from "express";
import * as branchesController from "../controllers/branchesController";

const router: Router = express.Router();

// "/api/v1/items" prefixes all below routes
router.get("/", branchesController.getAllBranches);
router.get("/:id", branchesController.getBranchById);
router.post("/", branchesController.createBranch);
router.put("/:id", branchesController.updateBranch);
router.delete("/:id", branchesController.deleteBranch);

export default router;