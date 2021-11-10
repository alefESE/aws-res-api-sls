import { UseCaseValidatableAdapter } from '@core/common/usecase';
import { ListEmployeePort } from '@core/employee/port/usecase';
import { ListEmployeeAdapterSchema } from '.';

/**
 * List employee use case data adapter
 */
export class ListEmployeeAdapter extends UseCaseValidatableAdapter implements ListEmployeePort {
    constructor (_payload: ListEmployeePort) {
        super();
    }
    
    /**
     * Build list employee use case adapter
     * @param payload Input port data payload
     * @returns List employee use case input port adapter
     */
    public static async build(payload: ListEmployeePort): Promise<ListEmployeeAdapter> {
        const adapter: ListEmployeeAdapter = new ListEmployeeAdapter(payload);
        await adapter.validate(ListEmployeeAdapterSchema);

        return adapter;
    }

}