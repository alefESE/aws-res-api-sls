import AWS from 'aws-sdk';

export type updateQueryFromObject = {
    exclude?: string[]
}

/**
 * Transform data payload to AWS update item params
 * @param data Data payload
 * @param options Transform options
 * @returns AWS update item transformed object
 */
export function updateQueryFromObject(data: any, options?: updateQueryFromObject): Pick<
    AWS.DynamoDB.DocumentClient.UpdateItemInput,
    'UpdateExpression' | 'ExpressionAttributeNames' | 'ExpressionAttributeValues'
> {
    let exp = {
        UpdateExpression: 'set',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {}
    };
    Object.entries(data).forEach(([key, item]) => {
        if (!options?.exclude?.includes(key)) {
            exp.UpdateExpression += ` #${key} = :${key},`;
            exp.ExpressionAttributeNames[`#${key}`] = key;
            exp.ExpressionAttributeValues[`:${key}`] = item;
        }
    });
    exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
    return exp;
}