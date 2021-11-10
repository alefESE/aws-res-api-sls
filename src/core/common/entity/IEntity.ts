import Joi from 'joi';

/**
 * Entity interface
 */
export interface IEntity<TId extends string | number> {
    getId(): TId;
    validate(schema: Joi.PartialSchemaMap): Promise<void>;
}