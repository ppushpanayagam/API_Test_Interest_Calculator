import { APIRequestContext, APIResponse} from "playwright"
import { GlobalConfig, GlobalAPIResponseVariables} from "../env/global";
import {retrieveHostURL} from "./host-helper";
import Ajv from "ajv";

export const getResponse = async (
    request: APIRequestContext,
    route: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)

    const response = await request.get(url.href+route)

    globalAPIResponseVariables.response = response

    return response
}

export const getResponseWithQueryParams = async (
    request: APIRequestContext,
    route: string,
    amount: Number,
    interest: Number,
    duration: Number,
    accrualType: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retrieveHostURL(globalConfig)
    const response = await request.get(url.href+route, {
        params:{
            amount: `${amount}`,
            interestRate: `${interest}`,
            duration: `${duration}`,
            accrualType: `${accrualType}`
        }
    })
    
    globalAPIResponseVariables.response = response

    return response
}


export const validateSchema = async (
    schema: any,
    response: JSON
): Promise<Boolean> => {

    const ajv = new Ajv();
    
    const validate = ajv.compile(schema);

    const isValid = validate(response);

    return isValid
}