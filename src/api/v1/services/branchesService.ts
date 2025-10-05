// src/api/v1/services/branchesService.ts
import { Branch, branches } from "../../../data/branches";

/**
 * Retrieves all branches
 */
export const getAllBranches = async (): Promise<Branch[]> => {
  return structuredClone(branches);
};

/**
 * Retrieves a single branch by ID
 * @param id - the ID for the branch
 * @returns the ID based of the branch
 */
export const getBranchById = async (id: number): Promise<Branch> => {
  const branch = branches.find((b) => b.id === id);
  if (!branch) {
    throw new Error(`Branch with ID ${id} not found`);
  }
  return structuredClone(branch);
};