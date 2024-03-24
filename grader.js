/* Write a program that prompts the user to input student marks. 
The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40. */

// declare function
function studentGrader(score) {
    // declare an empty variable grade
    let grade = " ";
    if (score > 100 || score < 0) {
      grade = "Invalid input";
    } else if (score > 79) {
      grade = "A";
    } else if (score >= 60 && score <= 79) {
      grade = "B";
    } else if (score >= 49 && score <= 59) {
      grade = "C";
    } else if (score >= 40 && score < 49) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    return grade;
  }
  
  console.log(studentGrader(120)); 
  console.log(studentGrader(80));
  console.log(studentGrader(65));
  console.log(studentGrader(55));
  console.log(studentGrader(40));
  console.log(studentGrader(30));
  console.log(studentGrader(-5));
  