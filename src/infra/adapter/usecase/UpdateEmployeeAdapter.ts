import { UseCaseValidatableAdapter } from '@core/common/usecase';
import { EmployeeRoleType } from '@core/employee/entity';
import { UpdateEmployeePort } from '@core/employee/port/usecase';
import { UpdateEmployeeAdapterSchema } from '.';

/**
 * Update employee use case data adapter
 */
export class UpdateEmployeeAdapter extends UseCaseValidatableAdapter implements UpdateEmployeePort {
    id: string;
    name: string;
    age: string;
    role: EmployeeRoleType;

    constructor (payload: UpdateEmployeePort) {
        super();

        this.id = payload.id;
        this.name = payload.name;
        this.age = payload.age;
        this.role = payload.role;
    }

    /**
     * Build update employee use case adapter
     * @param payload Input port data payload
     * @returns update employee use case input port adapter
     */
    public static async build(payload: UpdateEmployeePort): Promise<UpdateEmployeeAdapter> {
        const adapter: UpdateEmployeeAdapter = new UpdateEmployeeAdapter(payload);
        await adapter.validate(UpdateEmployeeAdapterSchema);

        return adapter;
    }

}