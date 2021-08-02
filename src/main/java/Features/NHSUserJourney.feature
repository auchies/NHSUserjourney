Feature: Wales user Journey test
As a person from Wales I need to know what help I can get with my NHS costs
So that I can get the treatment I need

Scenario: Verify that a user can check if there are eligible for treatment or not

Given I am a person from Wales
When I input my circumstances into the checker tool
Then I should get a result of whether I will get help or not