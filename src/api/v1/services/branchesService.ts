// src/api/v1/services/branchesService.ts
import { Branch, branches } from "../../../data/branches";

/**
 * Retrieves all branches
 */
export const getAllBranches = async (): Promise<Branch[]> => {
  return structuredClone(branches);
};