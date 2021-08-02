$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NHSUserJourney.feature");
formatter.feature({
  "line": 1,
  "name": "Wales user Journey test",
  "description": "As a person from Wales I need to know what help I can get with my NHS costs\r\nSo that I can get the treatment I need",
  "id": "wales-user-journey-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that a user can check if there are eligible for treatment or not",
  "description": "",
  "id": "wales-user-journey-test;verify-that-a-user-can-check-if-there-are-eligible-for-treatment-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I input my circumstances into the checker tool",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});