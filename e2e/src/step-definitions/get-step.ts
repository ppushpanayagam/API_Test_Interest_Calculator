import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";

Given(
    /^I get the "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {

        const{
            api: {request},
            globalAPIResponseVariables
        }=this
        
        const response = await request.get("http://localhost:8080/interest/calculate?amount=1000&interestRate=5&duration=3&accrualType=COMPOUND")

        globalAPIResponseVariables.response = response
        
        console.log(await response.text())

    }
) 