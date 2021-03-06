/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CountryInfo } from '../models';
// @ts-ignore
import { CultureDto } from '../models';
// @ts-ignore
import { LocalizationOption } from '../models';
// @ts-ignore
import { ParentalRating } from '../models';
/**
 * LocalizationApi - axios parameter creator
 * @export
 */
export const LocalizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountries: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Countries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCultures: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Cultures`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Options`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentalRatings: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/ParentalRatings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocalizationApi - functional programming interface
 * @export
 */
export const LocalizationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCountries(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CountryInfo>>> {
            const localVarAxiosArgs = await LocalizationApiAxiosParamCreator(configuration).getCountries(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCultures(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CultureDto>>> {
            const localVarAxiosArgs = await LocalizationApiAxiosParamCreator(configuration).getCultures(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationOptions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LocalizationOption>>> {
            const localVarAxiosArgs = await LocalizationApiAxiosParamCreator(configuration).getLocalizationOptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getParentalRatings(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ParentalRating>>> {
            const localVarAxiosArgs = await LocalizationApiAxiosParamCreator(configuration).getParentalRatings(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LocalizationApi - factory interface
 * @export
 */
export const LocalizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets known countries.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountries(options?: any): AxiosPromise<Array<CountryInfo>> {
            return LocalizationApiFp(configuration).getCountries(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets known cultures.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCultures(options?: any): AxiosPromise<Array<CultureDto>> {
            return LocalizationApiFp(configuration).getCultures(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets localization options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions(options?: any): AxiosPromise<Array<LocalizationOption>> {
            return LocalizationApiFp(configuration).getLocalizationOptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets known parental ratings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getParentalRatings(options?: any): AxiosPromise<Array<ParentalRating>> {
            return LocalizationApiFp(configuration).getParentalRatings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocalizationApi - object-oriented interface
 * @export
 * @class LocalizationApi
 * @extends {BaseAPI}
 */
export class LocalizationApi extends BaseAPI {
    /**
     * 
     * @summary Gets known countries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getCountries(options?: any) {
        return LocalizationApiFp(this.configuration).getCountries(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets known cultures.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getCultures(options?: any) {
        return LocalizationApiFp(this.configuration).getCultures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets localization options.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getLocalizationOptions(options?: any) {
        return LocalizationApiFp(this.configuration).getLocalizationOptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets known parental ratings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationApi
     */
    public getParentalRatings(options?: any) {
        return LocalizationApiFp(this.configuration).getParentalRatings(options).then((request) => request(this.axios, this.basePath));
    }
}
