import { EmployeeRepositoryPort } from '@core/employee/port/persist/EmployeeRepositoryPort';
import { DeleteEmployeePort } from '@core/employee/port/usecase';
import { DeleteEmployeeUseCase } from '@core/employee/usecase';
import { EmployeeRepositoryService } from '../../../../core/service/persist';

/**
 * Delete employee use case repository gateway
 */
export class DeleteEmployeeService implements DeleteEmployeeUseCase {
    private readonly employeeRepository: EmployeeRepositoryPort;
    constructor () {
        let options = {};
        if (process.env.IS_OFFLINE) {
            options = {
                region: 'us-east-1',
                endpoint: 'http://localhost:8000',
            };
        }
        this.employeeRepository = EmployeeRepositoryService.getInstance(options);
    }

    /**
     * Use case executor
     * @param payload Input data port payload
     * @returns Employee use case DTO
     */
    public async exec(payload: DeleteEmployeePort): Promise<void> {
        await this.employeeRepository.deleteEmployee(payload.id);
    }
}