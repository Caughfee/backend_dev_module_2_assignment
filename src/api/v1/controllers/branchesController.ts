import { Request, Response, NextFunction } from "express";
import * as branchesService from "../services/branchesService";
import { Branch } from "src/data/branches";

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
};

/**
 * Gets a branch by ID
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 * @returns 
 */
export const getBranchById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Number(req.params.id);

        const branch = await branchesService.getBranchById(id);

        res.status(200).json({
            message: "Branch retrieved successfully",
            data: branch,
        });

    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Creates a branch
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 * @returns The new branch
 */
export const createBranch = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // basic validation
        if (!req.body.name) {
            res.status(400).json({
                message: "Branch name is required",
            });
            return;
        }

        if (!req.body.address) {
            res.status(400).json({
                message: "Branch address is required",
            });
            return;
        }

        if (!req.body.phone) {
            res.status(400).json({
                message: "Branch phone number is required",
            });
            return;
        }

        // Extract only the fields we need
        const { name, address, phone } = req.body;
        const branchData = { name, address, phone};

        const newBranch: Branch = await branchesService.createBranch(branchData);
        res.status(201).json({
            message: "Branch created successfully",
            data: newBranch
        })
    } catch (error) {
        next(error);
    }
}

/**
 * updates an existing branch
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const updateBranch = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Number(req.params.id);

        // extract update fields
        const { name, address, phone} = req.body;

        // create update data object with only the fields that can be updated
        const updateData = { name, address, phone };

        const updatedBranch: Branch = await branchesService.updateBranch(id, updateData);

        res.status(200).json({
            message: "Branch updated successfully",
            data: updatedBranch,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Deletes a branch by getting the ID
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteBranch = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Number(req.params.id);
        await branchesService.deleteBranch(id);
        res.status(200).json({
            message: "Branch deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}