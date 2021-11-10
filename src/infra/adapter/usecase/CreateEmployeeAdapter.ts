import { UseCaseValidatableAdapter } from '@core/common/usecase';
import { CreateEmployeePort } from '@core/employee/port/usecase';
import { EmployeeRoleType } from '@core/employee/entity';
import { CreateEmployeeAdapterSchema } from './CreateEmployeeAdapterSchema';

/**
 * Create employee use case data adapter
 */
export class CreateEmployeeAdapter extends UseCaseValidatableAdapter implements CreateEmployeePort {
    public name: string;
    public age: string;
    public role: EmployeeRoleType;

    constructor (payload: CreateEmployeePort) {
        super();

        this.age = payload.age;
        this.name = payload.name;
        this.role = payload.role;
    }

    /**
     * Build create employee use case adapter
     * @param payload Input port data payload
     * @returns Create employee use case input port adapter
     */
    public static async build(payload: CreateEmployeePort): Promise<CreateEmployeeAdapter> {
        const adapter: CreateEmployeeAdapter = new CreateEmployeeAdapter(payload);
        await adapter.validate(CreateEmployeeAdapterSchema);

        return adapter;
    }
}