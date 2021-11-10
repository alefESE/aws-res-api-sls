import { EmployeeRoleType } from '@core/employee/entity';

/**
 * Create employee input data port interface
 */
export interface CreateEmployeePort {
    name: string;
    age: string;
    role: EmployeeRoleType;
}