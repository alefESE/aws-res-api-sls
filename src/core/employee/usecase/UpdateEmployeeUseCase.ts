import { UseCase } from '@core/common/usecase';
import { UpdateEmployeePort } from '@core/employee/port/usecase';
import { EmployeeUseCaseDTO } from '@core/employee/dto';

/**
 * Update employee use case interface
 */
export interface UpdateEmployeeUseCase extends UseCase<UpdateEmployeePort, EmployeeUseCaseDTO> { }