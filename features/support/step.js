const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict


Given('user arrives at {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  if(string === 'login screen') assert.equal(true, true);
  return 'fail';
});


When('user puts in valid username', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.fail();
});


When('user keys in valid password', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
  assert.equal(this.variable, number);
});
