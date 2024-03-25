# SA.01: WK1: Code Challenge

#### Date, 2024/03/23

#### By Leslie Wambui Mwangi

## Description
This is a ReadMe file that explains how I solved my week 1 code challenge.

### Prerequisite
1. Create a repository on your GitHub account.
2. Use Javascript to wire down the solution.
NB: Use one folder, with 3 files for each solution. Please note that a single file should only hold one solution.
3. Push the solution to the above repository once done.
4. Submit the repository link for grading.
5. Ensure your repository has a well written README. 

NOTE: You are required to complete ALL the challenges
### Challenge 1: Student Grade Generator (Toy Problem)
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

### Solution
The Student Grader took in the student's marks provided as input.
It checked the marks against different ranges to determine the grade.
If the score is greater than 100, it returns 'Invalid input',
If the score is greater than 70, it returns an 'A',
If the score is between 60 and 79, it returns a 'B',
If the score is between 49 and 59, it returns a 'C',
If the score is between 40 and 49, it returns a 'D',
If the score is less than 40, it returns an 'E',
If the score is less than 0, it returns 'Invalid input'.


### Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

### Solution
The speed was set to 70km/h, kmPerDemeritPoint to 5 and demeritTreshhold to 12
If the speed is less than or equal to the speedLimit, it returns 'OK',
If the speed exceeded the speedLimit, the demerit points are to be calculated based on how much the speed is over the limit,
If the demeritPoints exceed the threshold, it returns 'License suspended'.

### Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

### Solution
I declared the function calculatePayee and used it to calculate the payee tax based on the given gross salary and the KRA tax rates to determine the payee account.
I used the calculateNHIFDeductions function to calculate the NHIF deductions based on the given gross salary, I then used the NHIF rates to determine the NHIF deductions.
I used the calculateNSSFDeductions function to calculate the NSSF deductions based on the given gross salary, I then used the NSSF rates to determine the NSSF deductions.
I then used the calculateSalary function taken from the basic salary and benefits to calculate the gross salsry, payee, NHIF deductions, NSSF deductions and the net salary.

### Resources
https://www.w3schools.com/js/js_functions.asp

https://www.w3schools.com/js/js_if_else.asp

https://youtu.be/KV31mJuUJnw?si=P08IC72jyk4vn24m

https://youtu.be/j1laALb8OVM?si=s8qFYPHwaSPhwexZ

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
git@github.com:Lesliemwangi/SA-01-WK1-CODE-CHALLENGE.git

# Live Link
https://github.com/Lesliemwangi/SA-01-WK1-CODE-CHALLENGE.git

## Technologies used
Github
Javascript

## Support and contact details
(https://github.com/Lesliemwangi)

### License
The content of this site is licensed under the Lesliemwangi
Copyright (c) 2024