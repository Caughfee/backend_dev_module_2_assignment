import { Employee, employees } from "../../../data/employees";

/**
 * Retrieves all employees
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
  return structuredClone(employees);
};