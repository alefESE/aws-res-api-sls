import { UseCase } from '@core/common/usecase';
import { ListEmployeePort } from '@core/employee/port/usecase';
import { EmployeeUseCaseDTO } from '@core/employee/dto';

/**
 * List employee use case interface
 */
export interface ListEmployeeUseCase extends UseCase<ListEmployeePort, EmployeeUseCaseDTO[]> { }