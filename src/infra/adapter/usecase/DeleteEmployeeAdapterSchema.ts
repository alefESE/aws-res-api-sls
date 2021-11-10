import Joi from 'joi';
import { DeleteEmployeeAdapter } from './DeleteEmployeeAdapter';

/**
 * Delete employee use case data validation schema
 */
export const DeleteEmployeeAdapterSchema: Joi.PartialSchemaMap<DeleteEmployeeAdapter> = {
    id: Joi.string().guid({ version: ['uuidv4'] }).required().messages({
        'string.base': '\'id\' should be a type of \'string\'.',
        'string.guid': '\'id\' should be a valid UUIDv4\'.',
        'any.required': '\'id\' is a required field.'
    })
};