import { EmployeeModel, EmployeeRoleType } from '@core/employee/entity';

/**
 * Employee use case Data Transfer Object
 */
export class EmployeeUseCaseDTO {
    id: string;
    name: string;
    age: string;
    role: EmployeeRoleType;

    constructor (payload: EmployeeModel) {
        this.id = payload.getId();
        this.name = payload.name;
        this.age = payload.age;
        this.role = payload.role;
    }

    /**
     * Map employee entity to DTO
     * @param employee The employee model
     * @returns Employee use case DTO
     */
    public static fromEmployee(employee: EmployeeModel): EmployeeUseCaseDTO {
        return new EmployeeUseCaseDTO(employee);
    }

    /**
     * Map employee entity array to DTO array
     * @param employees The employee model array
     * @returns Employee use case DTO array
     */
    public static fromEmployees(employees: EmployeeModel[]): EmployeeUseCaseDTO[] {
        return employees.map(employee => this.fromEmployee(employee));
    }
}