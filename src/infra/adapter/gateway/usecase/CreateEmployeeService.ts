import { EmployeeUseCaseDTO } from '@core/employee/dto';
import { EmployeeModel } from '@core/employee/entity';
import { EmployeeRepositoryPort } from '@core/employee/port/persist/EmployeeRepositoryPort';
import { CreateEmployeePort } from '@core/employee/port/usecase';
import { CreateEmployeeUseCase } from '@core/employee/usecase';
import { EmployeeRepositoryService } from '../../../../core/service/persist';

/**
 * Create employee use case repository gateway
 */
export class CreateEmployeeService implements CreateEmployeeUseCase {
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
    public async exec(payload: CreateEmployeePort): Promise<EmployeeUseCaseDTO> {
        const employee: EmployeeModel = await EmployeeModel.build({
            name: payload.name,
            age: payload.age,
            role: payload.role
        });

        await this.employeeRepository.addEmployee(employee);

        return EmployeeUseCaseDTO.fromEmployee(employee);
    }
}