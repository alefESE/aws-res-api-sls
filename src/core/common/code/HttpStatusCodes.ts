import { StatusCodeDescriptionType } from '.';

//#region Http Status Codes from https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

/**
 * Http Status Info Codes (100-199).
 */
type HttpInfoCodes = 100 | 101 | 102 | 103;

/**
 * Http Status Success Codes (200-299).
 */
type HttpSuccessCodes = 200 | 201 | 202 | 203 | 204 | 205 | 206
    | 207 | 208 | 226;

/**
 * Http Status Redirect Codes (300-399).
*/
type HttpRedirectCodes = 300 | 301 | 302 | 303 | 304 | 305 | 306
    | 307 | 308;

/**
 * Http Status Client Error Codes (400-499).
*/
type HttpClientErrorCodes = 400 | 401 | 402 | 403 | 404 | 405 | 406
    | 407 | 408 | 409 | 410 | 411 | 412 | 414 | 415 | 416 | 417
    | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431
    | 451;

/**
 * Http Status Server Error Codes (500-599).
*/
type HttpServerErrorCodes = 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507
    | 508 | 510 | 511;

//#endregion

/**
 * Http status codes type util
 */
export type HttpStatusCodesType = HttpInfoCodes | HttpSuccessCodes | HttpRedirectCodes
    | HttpClientErrorCodes | HttpServerErrorCodes;
/**
 * Common http status codes
 */
export class HttpStatusCodes {
    public static INFO: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 100,
        message: 'Continue.'
    };

    public static SUCCESS: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 200,
        message: 'Success.'
    };

    public static REDIRECT: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 300,
        message: 'Redirect.'
    };

    public static CLIENT_ERROR: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 400,
        message: 'Bad request.'
    };

    public static NOT_FOUND: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 404,
        message: 'Not Found.'
    };

    static CONFLICT: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 409,
        message: 'Conflict.'
    };

    public static SERVER_ERROR: StatusCodeDescriptionType<HttpStatusCodesType> = {
        code: 500,
        message: 'Internal error.'
    };
}