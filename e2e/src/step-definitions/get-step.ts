import { Given } from "@cucumber/cucumber";

Given(
    /^I get the "([^"]*)"$/,
    async function(route: string, {request}) {
        
        const response = await request.get("/interest/calculate")

        

    }
) 