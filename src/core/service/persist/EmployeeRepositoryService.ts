import * as AWS from 'aws-sdk';

import { EmployeeRepositoryPort } from '@core/employee/port/persist';
import { EmployeeModel } from '@core/employee/entity';
import { Exception } from '@core/common/exception';
import { HttpStatusCodes } from '@core/common/code';
import { updateQueryFromObject } from '@core/common/util';

/**
 * Employee repository service
 */
export class EmployeeRepositoryService implements EmployeeRepositoryPort {
    private static _instance: EmployeeRepositoryService;
    private client: AWS.DynamoDB.DocumentClient;

    private constructor (
        config?: AWS.DynamoDB.DocumentClient.DocumentClientOptions
            & AWS.DynamoDB.Types.ClientConfiguration
    ) {
        this.client = new AWS.DynamoDB.DocumentClient(config);
    }

    public static getInstance(
        config?: AWS.DynamoDB.DocumentClient.DocumentClientOptions
            & AWS.DynamoDB.Types.ClientConfiguration
    ) {
        if (!this._instance) {
            this._instance = new EmployeeRepositoryService(config);
        }

        return this._instance;
    }

    /**
     * List all employees on repository
     * @returns Employee entity array
     */
    async listEmployees(): Promise<EmployeeModel[]> {
        try {
            const { Items } = await this.client.scan({
                TableName: process.env.EMPLOYEES_TABLE
            }).promise();

            if (!Items) {
                throw new Exception(HttpStatusCodes.NOT_FOUND);
            }

            const promises = Items.map(item => EmployeeModel.build({
                age: item.age,
                name: item.name,
                role: item.role,
                id: item.id
            }));

            return Promise.all(promises);
        } catch (error) {
            throw new Exception({
                code: error.statusCode || error.code || 501,
                message: error.message
            });
        }
    }

    /**
     * Get employee by id on repository
     * @param id Employee id
     * @returns Employee entity
     */
    async getEmployee(id: string): Promise<EmployeeModel> {
        try {
            const { Item } = await this.client.get({
                TableName: process.env.EMPLOYEES_TABLE,
                Key: { id }
            }).promise();

            if (!Item) {
                throw new Exception(HttpStatusCodes.NOT_FOUND);
            }

            return EmployeeModel.build({
                age: Item.age,
                name: Item.name,
                role: Item.role,
                id: Item.id
            });
        } catch (error) {
            throw new Exception({
                code: error.statusCode || error.code || 500,
                message: error.message
            });
        }
    }

    /**
     * Add employee in repository
     * @param employee Employee data
     * @returns New employee entity
     */
    async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
        try {
            const result = await this.client.get({
                TableName: process.env.EMPLOYEES_TABLE,
                Key: { id: employee.getId() }
            }).promise();

            if (result.Item) {
                throw new Exception(HttpStatusCodes.CONFLICT);
            }

            await this.client.put({
                TableName: process.env.EMPLOYEES_TABLE,
                Item: employee
            }).promise();

            return employee;
        } catch (error) {
            throw new Exception({
                code: error.statusCode || error.code || 500,
                message: error.message
            });
        }
    }

    /**
     * Update employee in repository
     * @param employee Employee data
     */
    async updateEmployee(employee: EmployeeModel): Promise<void> {
        try {
            await this.client.update({
                TableName: process.env.EMPLOYEES_TABLE,
                Key: { id: employee.getId() },
                ...updateQueryFromObject(employee, { exclude: ['id'] })
            }).promise();
        } catch (error) {
            throw new Exception({
                code: error.statusCode || error.code || 500,
                message: error.message
            });
        }
    }

    /**
     * Delete employee by id
     * @param id Document id
     */
    async deleteEmployee(id: string): Promise<void> {
        try {
            await this.client.delete({
                TableName: process.env.EMPLOYEES_TABLE,
                Key: { id }
            }).promise();
        } catch (error) {
            throw new Exception({
                code: error.statusCode || error.code || 500,
                message: error.message
            });
        }
    }
}