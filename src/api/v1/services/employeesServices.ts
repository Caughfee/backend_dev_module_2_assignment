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

/**
 * Creates a new employee
 * @param employeeData - The data for the new employee
 * @returns The created employee with generated ID
 */
export const createEmployee = async (employeeData: {
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    branchId: number;
}): Promise<Employee> => {
    const newEmployee: Employee = {
        id: Date.now(), // used for a generated unique ID
        name: employeeData.name,
        position: employeeData.position,
        department: employeeData.department,
        email: employeeData.email,
        phone: employeeData.phone,
        branchId: employeeData.branchId, 
    }
// pushes the new branch to the array
    employees.push(newEmployee);

    return structuredClone(newEmployee)
};