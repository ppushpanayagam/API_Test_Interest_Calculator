import { Then } from "@cucumber/cucumber"
import { ScenarioWorld } from "../setup/world";
import { expect } from "@playwright/test"
import schema from "../../utils/responseSchema.json";
import { validateSchema } from "../../support/rest-helper";

Then(
    /^the response was (successful)?(unsuccessful)?$/,
    async function(this: ScenarioWorld, success: boolean, unsuccessful: boolean) {
        const {
            globalAPIResponseVariables
        } = this

        console.log(`the response was ${unsuccessful?'unsuccessful ':'successful '} `)

        const response = globalAPIResponseVariables.response

        if (unsuccessful) {
            expect(response.ok()).toBeFalsy()
        } else {
            expect(response.ok()).toBeTruthy()
        }

    }
)

Then(
    /^the response status code should be (\d*)$/,
    async function(this: ScenarioWorld, statusCode: string) {
        const {
            globalAPIResponseVariables
        } = this

        const response = globalAPIResponseVariables.response

        expect(response.status()).toBe(Number(statusCode))
        
    }
)

Then(
    /^the api should return interest rate as "([^"]*)"$/,
    async function(this: ScenarioWorld, expectedInterestRate: string) {
        const {
            globalAPIResponseVariables
        } = this

        const response = globalAPIResponseVariables.response
        const responseBody = await response.json()

        expect(await responseBody.interestAccrued).toBe(Number(expectedInterestRate))

        const schemaValidationResult = await validateSchema(schema, responseBody);
        expect(schemaValidationResult).toBeTruthy()

    }
)