import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { getResponse } from "../support/rest-helper";
import {getInterestCalculatorEndPoint} from "../utils/supportMethods"


Given(
    /^I set "([^"]*)" "([^"]*)" "([^"]*)" to calculate "([^"]*)" interest$/,
    async function(principal: Number, interest:Number, duration: Number, accrualType: string) {

        var endPoint = getInterestCalculatorEndPoint(principal, interest, duration, accrualType)
        console.log(endPoint)
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
    
        await getResponse (request, getInterestCalculatorEndPoint(1000, 5, 3, route), globalConfig, globalAPIResponseVariables)
        
        console.log(await globalAPIResponseVariables.response.text())

    }
) 