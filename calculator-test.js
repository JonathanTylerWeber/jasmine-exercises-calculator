
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment()).toEqual(33.16);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(values).toString()).toMatch(/^\d+\.\d\d$/);
});

