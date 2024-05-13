# API_Test_Interest_Calculator

OVERVIEW ABOUT THE AUTOMATION FRAMEWORK:

    This is an API automation test framework that configured with various tech stacks and configurations. BDD test approach has been implemented using Cucumber with Playwright and TypeScript.
    
    
    Highlights of the framework:
        1. BDD Test approach using Cucumber
        2. Utilised Typescript for test script
        3. Playwright library has been used to create API test suite
        4. Cucumber HTML reporter will be generated for each test run
        5. Framework implemented with global config to enable it to use it for different environment
        6. TAG strategy used to segregate the test run based on the requriements
        7. Utilised eslint to check the code quality
        8. Test run configured through bash file and it can be configured in CI CD to run
        9. Cucumber.JS runner has been configured to customise the test runner
        10. Schema validation performed with other validation points
        11. Reusable REST helper function for API calls and assertions



1. TO SETUP THE PROJECT

    1. move to e2e folder directory from project root --> cd e2e
    2. npm install

2. TO CHECK THE CODE QUALITY

    npm run lint

3. To RUN THE TESTS

    ./run_tests.sh dev        #-----> dev is a tag used in the feature file under src/features(dev, smoke and regression tags are set)

4. TO VIEW THE REPORT

    e2e/reports/cucumber-html-report.html 



SUGGESTIONS:

1. BUG 
    When I calculate Compound interest with following data amount = 1, time = 1, interestRate = 1 then I should get 0.01 as a interestAccrued but result is 30.01.
        {
            "startingAmount": 1.00,
            "interestAccrued": 30.01,
            "finalBalance": 31.01
        }

        Expected: 0.01
        Received: 30.01

2. Documentation Correction

    1. Endpoint given for interest calculation is inconsistent in the documents because in one place I can see 
        URL: /interest/calculation but this is not working as expected and the right one given in the bottom of the document as interest/calculate.
        
    2. accrualType is given in lower case but it will not work as expected and in the code base enum set in camel case so I need to use camel case instead of lower case to make it work since code base doesnt convert from lower to camel case at the runtime.