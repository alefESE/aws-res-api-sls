import { Exception } from '@core/common/exception';
import { EmployeeModel } from '@core/employee/entity';

describe('Entities Tests', () => {
    describe('Employee entities instance validator tests', () => {
        it('Success with right data payload', async () => {
            const builder = EmployeeModel.build({
                age: 'age',
                name: 'name',
                role: 'Developer'
            });

            await expect(builder).resolves.toBeInstanceOf(EmployeeModel);
        });

        it('Fails with wrong data payload', async () => {
            const payload: any = {
                wrong: 'testing'
            }

            const builder = EmployeeModel.build({
                age: payload.age,
                name: payload.name,
                role: payload.role
            });

            await expect(builder).rejects.toBeInstanceOf(Exception);
        });
    });
});