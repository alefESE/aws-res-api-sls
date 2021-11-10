import Joi from 'joi';
import { EmployeePayload } from '.';

/**
 * Employee model data validation schema
 */
export const EmployeeModelSchema: Joi.PartialSchemaMap<EmployeePayload> = {
    id: Joi.string().guid({ version: ['uuidv4'] }).required().messages({
        'string.base': '\'id\' should be a type of \'string\'.',
        'any.required': '\'id\' is a required field.'
    }),
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