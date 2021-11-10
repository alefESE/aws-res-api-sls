import { EmployeeUseCaseDTO } from '@core/employee/dto';
import { EmployeeModel } from '@core/employee/entity';
import { EmployeeRepositoryPort } from '@core/employee/port/persist/EmployeeRepositoryPort';
import { UpdateEmployeePort } from '@core/employee/port/usecase';
import { UpdateEmployeeUseCase } from '@core/employee/usecase';
import { EmployeeRepositoryService } from '@core/service/persist';

/**
 * Update employee use case repository gateway
 */
export class UpdateEmployeeService implements UpdateEmployeeUseCase {
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
    public async exec(payload: UpdateEmployeePort): Promise<EmployeeUseCaseDTO> {
        const employee: EmployeeModel = await EmployeeModel.build(payload);

        await this.employeeRepository.updateEmployee(employee);

        return EmployeeUseCaseDTO.fromEmployee(employee);
    }
}