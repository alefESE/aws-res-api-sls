import Joi from 'joi';
import { CreateEmployeeAdapter } from '.';

/**
 * Create employee use case data validation schema
 */
export const CreateEmployeeAdapterSchema: Joi.PartialSchemaMap<CreateEmployeeAdapter> = {
    age: Joi.string().required().messages({
        'string.base': '\'age\' should be a type of \'string\'.',
        'any.required': '\'age\' is a required field.'
    }),
    name: Joi.string().required().messages({
        'string.base': '\'inamed\' should be a type of \'string\'.',
        'any.required': '\'name\' is a required field.'
    }),
    role: Joi.string().valid('Developer', 'Manager').required().messages({
        'string.base': '\'role\' should be a type of \'string\'.',
        'string.valid': '\'role\' should be \'Developer\' or \'Manager\'.',
        'any.required': '\'role\' is a required field.'
    })
};