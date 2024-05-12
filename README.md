# API_Test_Interest_Calculator

OVERVIEW ABOUT THE AUTOMATION FRAMEWORK:

    This is an API automation test framework that configured with various tech stacks and configurations. BDD test approach has been implemented using Cucumber. 
    
    
    Highlights of the framework:
        1. BDD Test approach using Cucumber
        2. Utilised Typescript for test script
        3. Playwright library has been used to create API test suite
        4. Cucumber HTML reporter will be generated for each test run
        5. Framework implemented with global config to enable it to use it for different environment
        6. TAG strategy used to segregate the test run based on the requriements
        7. Utilised Lint to check the code quality
        8. Test run configured through bash file and it can be configured in CI CD to run
        9. Cucumber.JS runner has been configured to customise the test runner



1. TO SETUP THE PROJECT

    1. move to e2e folder directory from project root --> cd e2e
    2. npm install

2. TO CHECK THE CODE QUALITY

    npm run lint

3. To RUN THE TESTS

    ./run_tests.sh dev        #-----> dev is a tag used in the feature file (dev, smoke and regression tags are set)

4. TO VIEW THE REPORT

    e2e/reports/cucumber-html-report.html 