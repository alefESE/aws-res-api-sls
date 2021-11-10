import { EmployeeModel } from '@core/employee/entity';

/**
 * Employee repository port interface
 */
export interface EmployeeRepositoryPort {
    listEmployees(): Promise<EmployeeModel[] | undefined>;
    getEmployee(id: string): Promise<EmployeeModel | undefined>;
    addEmployee(employee: EmployeeModel): Promise<EmployeeModel>;
    updateEmployee(employee: EmployeeModel): Promise<void>;
    deleteEmployee(id: string): Promise<void>;
}