import { StatusCodeDescriptionType } from '@core/common/code';

/**
 * Core api exception
 */
export class Exception<TCode = number, TData = any> extends Error {
    public readonly code: TCode;
    public readonly data?: TData;

    public constructor (
        codeDescription: StatusCodeDescriptionType<TCode>,
        overrideMsg?: string, data?: any
    ) {
        super();

        this.name = this.constructor.name;
        this.code = codeDescription.code;
        this.data = data;
        this.message = overrideMsg ?? codeDescription.message;
    }
}