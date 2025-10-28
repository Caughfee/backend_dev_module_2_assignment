import { Employee, employees } from "../../../data/employees";

/**
 * Retrieves all employees
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
  return structuredClone(employees);
};

/**
 * Retrieves a single emp;oyee by ID
 * @param id - the ID for the employee
 * @returns the employee based of the ID
 */
export const getEmployeeById = async (id: number): Promise<Employee> => {
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    throw new Error(`Employee with ID ${id} not found`);
  }
  return structuredClone(employee);
};