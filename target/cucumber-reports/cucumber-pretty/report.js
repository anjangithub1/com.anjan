$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality feature",
  "description": "",
  "id": "login-functionality-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "login-functionality-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigate to  home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-functionality-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-functionality-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Raghav",
        "12345"
      ],
      "line": 13,
      "id": "login-functionality-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "eli",
        "12345"
      ],
      "line": 14,
      "id": "login-functionality-feature;free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "Raghav1",
        "12345"
      ],
      "line": 15,
      "id": "login-functionality-feature;free-crm-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "login-functionality-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Raghav\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigate to  home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8444385200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghav",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 26
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 309379000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 104478300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_home_page()"
});
formatter.result({
  "duration": 84008000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 843119100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "login-functionality-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"eli\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigate to  home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 7361807200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eli",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 251901100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 105178100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_home_page()"
});
formatter.result({
  "duration": 65633800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 789263100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "login-functionality-feature;free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Raghav1\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigate to  home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 5348046200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghav1",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 27
    }
  ],
  "location": "LoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 258229200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 94286500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_home_page()"
});
formatter.result({
  "duration": 69118100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 820462200,
  "status": "passed"
});
});