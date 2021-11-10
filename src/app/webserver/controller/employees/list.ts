import { HttpStatusCodes } from '@core/common/code';
import { ListEmployeeService } from '@infra/adapter/gateway/usecase';
import { ListEmployeeAdapter } from '@infra/adapter/usecase';
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

/**
 * Serverless controller handler executor
 * @returns Api gateway result data
 */
export async function handlerExecutor(): Promise<APIGatewayProxyResult> {
    try {
        // Adapt application data to inners layers (Input Port)
        const adapter: ListEmployeeAdapter = await ListEmployeeAdapter.build({});

        // Use case interactor
        const useCase = new ListEmployeeService();

        // Run use case and return DTO (Output Port)
        const employees = await useCase.exec(adapter);

        // Presenter data
        return {
            statusCode: HttpStatusCodes.SUCCESS.code,
            body: JSON.stringify(employees)
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
 * @returns Api gateway result data
 */
const handler: APIGatewayProxyHandler = async () => {
    return handlerExecutor();
};

export { handler };