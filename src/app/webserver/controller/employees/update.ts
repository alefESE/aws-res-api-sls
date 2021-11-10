import { HttpStatusCodes } from '@core/common/code';
import { UpdateEmployeeService } from '@infra/adapter/gateway/usecase';
import { UpdateEmployeeAdapter } from '@infra/adapter/usecase';
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

/**
 * Serverless controller handler executor
 * @param id Parsed document id
 * @param body Parsed body payload
 * @returns Api gateway result data
 */
export async function handlerExecutor(id: string, body: any): Promise<APIGatewayProxyResult> {
    try {
        // Adapt application data to inners layers (Input Port)
        const adapter: UpdateEmployeeAdapter = await UpdateEmployeeAdapter.build({
            id,
            age: body.age,
            name: body.name,
            role: body.role
        });

        // Use case interactor
        const useCase = new UpdateEmployeeService();

        // Run use case and return DTO (Output Port)
        const updatedEmployee = await useCase.exec(adapter);

        // Presenter data
        return {
            statusCode: HttpStatusCodes.SUCCESS.code,
            body: JSON.stringify(updatedEmployee),
            headers: { 'Content-Type': 'application/json' }
        };
    } catch (error) {
        return {
            statusCode: error.code,
            body: error.message
        }
    }
}

/**
 * Serverless controller handler
 * @param event Api proxy event
 * @param _context Api proxy context
 * @param _callback Api proxy callback
 * @returns Api gateway result data
 */
const handler: APIGatewayProxyHandler = async (event, _context, _callback) => {
    try {
        const body = JSON.parse(event.body);
        return handlerExecutor(event.pathParameters.id, body);
    } catch (error) {
        return {
            statusCode: HttpStatusCodes.CLIENT_ERROR.code,
            body: HttpStatusCodes.CLIENT_ERROR.message
        }
    }
};

export { handler };