import { expect, test } from '@playwright/test'

test('retrieve user posts', async ({ request}) => {
    const response = await request.get('interest/calculate?amount=1000&interestRate=5&duration=3&accrualType=SIMPLE')
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
})