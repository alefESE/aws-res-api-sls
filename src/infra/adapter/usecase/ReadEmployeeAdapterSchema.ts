import Joi from 'joi';
import { ReadEmployeeAdapter } from '.';

/**
 * Read employee use case data validation schema
 */
export const ReadEmployeeAdapterSchema: Joi.PartialSchemaMap<ReadEmployeeAdapter> = {
    id: Joi.string().guid({ version: ['uuidv4'] }).required().messages({
        'string.base': '\'id\' should be a type of \'string\'.',
        'string.guid': '\'id\' should be a valid UUIDv4\'.',
        'any.required': '\'id\' is a required field.'
    })
};