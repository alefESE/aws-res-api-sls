import { HttpStatusCodes } from '@core/common/code';
import { ReadEmployeeService } from '@infra/adapter/gateway/usecase';
import { ReadEmployeeAdapter } from '@infra/adapter/usecase';
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

/**
 * Serverless controller handler executor
 * @param id Parsed document id
 * @returns Api gateway result data
 */
export async function handlerExecutor(id: string): Promise<APIGatewayProxyResult> {
    try {
        // Adapt application data to inners layers (Input Port)
        const adapter: ReadEmployeeAdapter = await ReadEmployeeAdapter.build({ id });

        // Use case interactor
        const useCase = new ReadEmployeeService();

        // Run use case and return DTO (Output Port)
        const readEmployee = await useCase.exec(adapter);

        // Presenter data
        return {
            statusCode: HttpStatusCodes.SUCCESS.code,
            body: JSON.stringify(readEmployee),
            headers: { 'Content-Type': 'application/json' }
        }
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
    return handlerExecutor(event.pathParameters.id);
};

export { handler };