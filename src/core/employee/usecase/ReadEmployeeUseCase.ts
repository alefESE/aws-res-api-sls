import { UseCase } from '@core/common/usecase';
import { ReadEmployeePort } from '@core/employee/port/usecase';
import { EmployeeUseCaseDTO } from '@core/employee/dto';

/**
 * Read employee use case interface
 */
export interface ReadEmployeeUseCase extends UseCase<ReadEmployeePort, EmployeeUseCaseDTO> { }