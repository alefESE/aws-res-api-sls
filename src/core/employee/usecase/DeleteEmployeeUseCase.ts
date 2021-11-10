import { UseCase } from '@core/common/usecase';
import { DeleteEmployeePort } from '@core/employee/port/usecase';

/**
 * Delete employee use case interface
 */
export interface DeleteEmployeeUseCase extends UseCase<DeleteEmployeePort, void> { }