//write a unit test case to check if email is valid or not
const validateEmail = require("../validateEmail");

test("email is valid", () => {
  expect(validateEmail("XXXXXXXXXXXXXX")).toBe(true);
});

test("email is invalid", () => {
  expect(validateEmail("XXXXXXXXXXXXX")).toBe(false);
});
