import { EmployeeRoleType } from '@core/employee/entity';

/**
 * Update employee input data port interface
 */
export interface UpdateEmployeePort {
    id: string;
    name: string;
    age: string;
    role: EmployeeRoleType;
}