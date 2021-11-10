import { UseCase } from '@core/common/usecase';
import { CreateEmployeePort } from '@core/employee/port/usecase';
import { EmployeeUseCaseDTO } from '@core/employee/dto';

/**
 * Create employee use case interface
 */
export interface CreateEmployeeUseCase extends UseCase<CreateEmployeePort, EmployeeUseCaseDTO> { }