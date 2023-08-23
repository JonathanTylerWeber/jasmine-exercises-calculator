window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

const loanAmount = document.querySelector('#loan-amount');
const loanYears = document.querySelector('#loan-years');
const loanRate = document.querySelector('#loan-rate');
const monthlyPayment = document.querySelector('#monthly-payment');

function getCurrentUIValues() {
  return {
    amount: +(loanAmount.value),
    years: +(loanYears.value),
    rate: +(loanRate.value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  loanAmount.value = 1000;
  loanYears.value = 4;
  loanRate.value = .25;
  calculateMonthlyPayment();
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  const monthly = calculateMonthlyPayment();
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  const mP = (loanAmount.value * (loanRate.value / 12)) / (1 - (1 + (loanRate.value / 12)) ** -(loanYears.value * 12));
  return mP.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment.innerHTML = monthly;
}
