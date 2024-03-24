/* Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below. */

// declare the calculate Payee function
function calculatePayee(grossSalary) {
  const payee = 0;
  // use if, else and else if as control structures
  if (grossSalary <= 24000) {
    payee = 0;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    payee = 0.1 * (grossSalary - 24000);
  } else if (grossSalary > 32333 && grossSalary <= 40667) {
    payee = 833 + 0.15 * (grossSalary - 32333);
  } else if (grossSalary > 40667 && grossSalary <= 49000) {
    payee = 2499 + 0.2 * (grossSalary - 40667);
  } else if (grossSalary > 49000 && grossSalary <= 57333) {
    payee = 4999 + 0.25 * (grossSalary - 49000);
  } else if (grossSalary > 57333 && grossSalary <= 65667) {
    payee = 8999 + 0.3 * (grossSalary - 57333);
  } else {
    payee = 13499 + 0.35 * (grossSalary - 65667);
  }
  return payee;
}

// declare the calculate NHIF Deduction function
function calculateNHIFDeductions(grossSalary) {
  const nhifDeductions = 0;
  // use if, else and else if as control structures
  if (grossSalary <= 5999) {
    nhifDeductions = 150;
  } else if (grossSalary > 5999 && grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary > 7999 && grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary > 11999 && grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary > 14999 && grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary > 19999 && grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary > 24999 && grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary > 29999 && grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary > 34999 && grossSalary <= 39999) {
    nhifDeductions = 1000;
  } else if (grossSalary > 39999 && grossSalary <= 44999) {
    nhifDeductions = 1100;
  } else if (grossSalary > 44999 && grossSalary <= 49999) {
    nhifDeductions = 1200;
  } else {
    nhifDeductions = 1300;
  }
  return nhifDeductions;
}

// declare the calculate NSSF Deduction function
function calculateNSSFDeductions(grossSalary) {
  const nssfDeductions = 0;
  // use if, else and else if as control structures
  if (grossSalary <= 6000) {
    nssfDeductions = 360;
  } else if (grossSalary > 6000 && grossSalary <= 18000) {
    nssfDeductions = 720;
  } else {
    nssfDeductions = 1200;
  }
  return nssfDeductions;
}

// declare the calculate Net Salary function
function calculateNetSalary(basicSalary, benefits) {
  // calculate gross salary
  const grossSalary = basicSalary + benefits;
  //calculate payee
  const payee = calculatePayee(grossSalary);
  //calculate NHIF deductions
  const nhifDeductions = calculateNHIFDeductions(grossSalary);
  //calculate NSSF deductions
  const nssfDeductions = calculateNSSFDeductions(grossSalary);
  //calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  return {
    grossSalary: grossSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary,
  };
}

// test the functions with different amounts
console.log(grossSalary);
console.log(payee);
console.log(nhifDeductions);
console.log(nssfDeductions);
console.log(netSalary);
