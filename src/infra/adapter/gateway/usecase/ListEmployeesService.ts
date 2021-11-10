import { EmployeeUseCaseDTO } from '@core/employee/dto';
import { EmployeeRepositoryPort } from '@core/employee/port/persist';
import { ListEmployeePort } from '@core/employee/port/usecase';
import { ListEmployeeUseCase } from '@core/employee/usecase';
import { EmployeeRepositoryService } from '@core/service/persist';

/**
 * List employee use case repository gateway
 */
export class ListEmployeeService implements ListEmployeeUseCase {
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
    public async exec(_payload: ListEmployeePort): Promise<EmployeeUseCaseDTO[]> {
        const employees = await this.employeeRepository.listEmployees();

        return EmployeeUseCaseDTO.fromEmployees(employees);
    }
}