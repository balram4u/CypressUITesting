const { Given,When} = require("@badeball/cypress-cucumber-preprocessor");
const USER_ID_FIELD = "//input[@id='userId']";
const PASSWORD_BUTTON = "//input[@id='password']";
const SUBMIT_BUTTON = "(//span[contains(text(),'Login')])[1]";
const LOGIN_BUTTON = "(//span[contains(text(),'Login')])[2]";
const NEXT_BUTTON = 'span:contains("Next")';
Given('I navigate to Login homepage',function()
{
cy.visit("10.91.8.40"); 
cy.wait(3000);  
})  

 When('I type Username',function()
 {
 cy.get('#userId').type("Balram");
 }) 
 When('I type password',function()
 {
 cy.get('#userId').type("Balram");
 }) 
