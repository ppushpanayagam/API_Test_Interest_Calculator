import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { getResponse } from "../support/rest-helper";

Given(
    /^I get the "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {

        const{
            api: {request},
            globalAPIResponseVariables,
            globalConfig
        }=this
        
        const endPoint = "interest/calculate?amount=1000&interestRate=5&duration=3&accrualType=COMPOUND"
        
        await getResponse (request, endPoint, globalConfig, globalAPIResponseVariables)
        
        console.log(await globalAPIResponseVariables.response.text())

    }
) 