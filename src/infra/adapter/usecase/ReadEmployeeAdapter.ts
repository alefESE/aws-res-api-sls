import { UseCaseValidatableAdapter } from '@core/common/usecase';
import { ReadEmployeePort } from '@core/employee/port/usecase';
import { ReadEmployeeAdapterSchema } from '.';

/**
 * Read employee use case data adapter
 */
export class ReadEmployeeAdapter extends UseCaseValidatableAdapter implements ReadEmployeePort {
    id: string;

    constructor (payload: ReadEmployeePort) {
        super();

        this.id = payload.id;
    }

    /**
     * Build read employee use case adapter
     * @param payload Input port data payload
     * @returns Read employee use case input port adapter
     */
    public static async build(payload: ReadEmployeePort): Promise<ReadEmployeeAdapter> {
        const adapter: ReadEmployeeAdapter = new ReadEmployeeAdapter(payload);
        await adapter.validate(ReadEmployeeAdapterSchema);

        return adapter;
    }

}