import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { getResponseWithQueryParams } from "../support/rest-helper";
import {getInterestCalculatorEndPoint} from "../utils/supportMethods"
import endPointPath from "../../config/enpoints.json";
declare var global: {
    [key: string]: any;
};



Given(
    /^I set "([^"]*)" "([^"]*)" "([^"]*)" to calculate "([^"]*)" interest$/,
    async function(principal: Number, interest:Number, duration: Number, accrualType: string) {

        global.amount = principal;
        global.interest = interest;
        global.duration = duration;
        global.accrualType = accrualType;
    }
) 

Given(
    /^I GET the api to calculate interest for "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {

        const{
            api: {request},
            globalAPIResponseVariables,
            globalConfig
        }=this
    
        await getResponseWithQueryParams (request, endPointPath.interestCalculation, global.amount, global.interest, global.duration, global.accrualType, globalConfig, globalAPIResponseVariables)
        
    }
) 