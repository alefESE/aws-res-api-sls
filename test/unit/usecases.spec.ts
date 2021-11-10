import { Exception } from '@core/common/exception';
import {
    CreateEmployeeAdapter, DeleteEmployeeAdapter, ListEmployeeAdapter,
    ReadEmployeeAdapter, UpdateEmployeeAdapter
} from '@infra/adapter/usecase';
import { randomUUID } from 'crypto';

describe('Use cases tests', () => {
    describe('Create employee use case data adaptors tests', () => {
        it('Success with right data payload', async () => {
            const builder = CreateEmployeeAdapter.build({
                age: '26',
                name: 'name',
                role: 'Developer'
            });

            await expect(builder).resolves.toBeInstanceOf(CreateEmployeeAdapter);
        });

        it('Fails with wrong data payload', async () => {
            const payload: any = {
                wrong: 'data'
            }

            const builder = CreateEmployeeAdapter.build(payload);

            await expect(builder).rejects.toBeInstanceOf(Exception);
        });
    });

    describe('Read employee use case data adaptors tests', () => {
        it('Success with right data payload', async () => {
            const builder = ReadEmployeeAdapter.build({
                id: randomUUID()
            });

            await expect(builder).resolves.toBeInstanceOf(ReadEmployeeAdapter);
        });

        it('Fails with wrong data payload', async () => {
            const payload: any = {
                id: 123
            }

            const builder = ReadEmployeeAdapter.build(payload);

            await expect(builder).rejects.toBeInstanceOf(Exception);
        });
    });

    describe('Update employee use case data adaptors tests', () => {
        it('Success with right data payload', async () => {
            const builder = UpdateEmployeeAdapter.build({
                age: '123',
                id: randomUUID(),
                name: 'name',
                role: 'Developer'
            });

            await expect(builder).resolves.toBeInstanceOf(UpdateEmployeeAdapter);
        });

        it('Fails with wrong data payload', async () => {
            const payload: any = {
                hey: 'what?'
            }

            const builder = UpdateEmployeeAdapter.build(payload);

            await expect(builder).rejects.toBeInstanceOf(Exception);
        });
    });

    describe('Delete employee use case data adaptors tests', () => {
        it('Success with right data payload', async () => {
            const builder = DeleteEmployeeAdapter.build({
                id: randomUUID()
            });

            await expect(builder).resolves.toBeInstanceOf(DeleteEmployeeAdapter);
        });

        it('Fails with wrong data payload', async () => {
            const payload: any = {
                id: 123
            }

            const builder = DeleteEmployeeAdapter.build(payload);

            await expect(builder).rejects.toBeInstanceOf(Exception);
        });
    });

    describe('List employee use case data adaptors tests', () => {
        it('Success with right data payload', async () => {
            const builder = ListEmployeeAdapter.build({});

            await expect(builder).resolves.toBeInstanceOf(ListEmployeeAdapter);
        });

        it('Fails with wrong data payload', async () => {

            // There's no payload port to adapt
            const builder = ListEmployeeAdapter.build({});

            await expect(builder).resolves.toBeInstanceOf(ListEmployeeAdapter);
        });
    });
});