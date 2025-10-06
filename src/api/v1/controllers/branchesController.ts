import { Request, Response, NextFunction } from "express";
import * as branchesService from "../services/branchesService";

/**
 * Manages requests and reponses to retrieve all Items
 * @param _req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllBranches = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const branches = await branchesService.getAllBranches();

        res.status(200).json({
            message: "Branches retrieved successfully",
            data: branches,
        });
    } catch (error: unknown) {
        next(error);
    }
}