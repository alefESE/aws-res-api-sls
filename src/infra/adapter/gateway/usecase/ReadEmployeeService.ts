import { EmployeeUseCaseDTO } from '@core/employee/dto';
import { EmployeeRepositoryPort } from '@core/employee/port/persist';
import { ReadEmployeePort } from '@core/employee/port/usecase';
import { ReadEmployeeUseCase } from '@core/employee/usecase';
import { EmployeeRepositoryService } from '@core/service/persist';

/**
 * Read employee use case repository gateway
 */
export class ReadEmployeeService implements ReadEmployeeUseCase {
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
    public async exec(payload: ReadEmployeePort): Promise<EmployeeUseCaseDTO> {
        const employee = await this.employeeRepository.getEmployee(payload.id);

        return EmployeeUseCaseDTO.fromEmployee(employee);
    }
}