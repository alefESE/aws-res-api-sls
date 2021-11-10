import { UseCaseValidatableAdapter } from '@core/common/usecase';
import { DeleteEmployeePort } from '@core/employee/port/usecase';
import { DeleteEmployeeAdapterSchema } from '.';

/**
 * Delete employee use case data adapter
 */
export class DeleteEmployeeAdapter extends UseCaseValidatableAdapter implements DeleteEmployeePort {
    id: string;

    constructor (payload: DeleteEmployeePort) {
        super();

        this.id = payload.id;
    }

    /**
     * Build delete employee use case adapter
     * @param payload Input port data payload
     * @returns Delete employee use case input port adapter
     */
    public static async build(payload: DeleteEmployeePort): Promise<DeleteEmployeeAdapter> {
        const adapter: DeleteEmployeeAdapter = new DeleteEmployeeAdapter(payload);
        await adapter.validate(DeleteEmployeeAdapterSchema);

        return adapter;
    }

}