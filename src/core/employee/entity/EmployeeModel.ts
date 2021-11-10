import { Entity } from '@core/common/entity/Entity';
import { randomUUID } from 'crypto';
import { EmployeeModelSchema } from '.';

/**
 * Employee roles
 */
export type EmployeeRoleType = 'Developer' | 'Manager';

/**
 * Core raw employee payload
 */
export type EmployeePayload = {
    id?: string;
    age: string;
    name: string;
    role: EmployeeRoleType;
};

/**
 * Employee model
 */
export class EmployeeModel extends Entity<string> {
    age: string;
    name: string;
    role: EmployeeRoleType;

    constructor (payload: EmployeePayload) {
        super();

        this.id = payload.id || randomUUID();
        this.age = payload.age;
        this.name = payload.name;
        this.role = payload.role;
    }

    /**
     * Employee model builder
     * @param payload Core raw employee payload
     * @returns Employee model object
     */
    public static async build(payload: EmployeePayload): Promise<EmployeeModel> {
        const employee: EmployeeModel = new EmployeeModel(payload);
        await employee.validate(EmployeeModelSchema);

        return employee;
    }
}