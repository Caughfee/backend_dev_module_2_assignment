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
 * @returns the branch based of the ID
 */
export const getBranchById = async (id: number): Promise<Branch> => {
  const branch = branches.find((b) => b.id === id);
  if (!branch) {
    throw new Error(`Branch with ID ${id} not found`);
  }
  return structuredClone(branch);
};

/**
 * Creates a new branch
 * @param branchData - The data for the new branch
 * @returns The created branch with generated ID
 */
export const createBranch = async (branchData: {
    name: string;
    address: string;
    phone: string;
}): Promise<Branch> => {
    const newBranch: Branch = {
        id: Date.now(), // used for a generated unique ID
        name: branchData.name,
        address: branchData.address,
        phone: branchData.phone,
    }

    // pushes the new branch to the array
    branches.push(newBranch);

    return structuredClone(newBranch)
};

/**
 * 
 * @param id -the id of the branch
 * @param branchData - the data of the branch
 * @returns - the updated branch
 */
export const updateBranch = async (
    id: number,
    branchData: Pick<Branch, "name" | "address" | "phone">
): Promise<Branch> => {
    const index: number = branches.findIndex((b: Branch) => b.id === id);

    if (index === -1) {
        throw new Error(`Branch with ID ${id} not found`);
    }

    branches[index] = {
        ...branches[index],
        ...branchData,
    };

    return structuredClone(branches[index]);
}

/**
 * 
 * @param id - The ID of the branch
 */
export const deleteBranch = async (id: number): Promise<void> => {
    const index: number = branches.findIndex((branch: Branch) => branch.id === id);

    if (index === -1) {
        throw new Error (`Branch with ID ${id} not found`);

    };
    branches.splice(index, 1);
}