const problemArray = ['business_questions', 'science_questions', 'arts_questions'];

const majors = ['Accounting', 'Management', 'Marketing', 'Banking and Finance', 'Computer Science', 'IT', 'Civil Engineering', 'Medicine', 'Nursing', 'Law', 'Political Science', 'Geography'];

let feedback = $('#feedback');

// const departmentArray = ['business', 'science', 'arts'];

// when the reset button is clicked
$('#reset').click(function () {
  location.reload();
});

// Getting the values on click of predict
$('#predict').click(function () {

  let problemSolving, highSchoolGraduation, grade,
    yearLeftInSchool;

  problemSolving = $('#optionProblem').val();
  highSchoolGraduation = $('#highSchoolGraduation').val();
  grade = $('#grade').val();
  yearLeftInSchool = $('#yearSpend').val();

  predict(problemSolving, highSchoolGraduation, grade, yearLeftInSchool);



});


function predict(problemSolving, highSchoolGraduation, grade, yearLeftInSchool) {
  if (problemSolving == problemArray[0]) {
    if (highSchoolGraduation == 'yes') {
      if (grade >= 50) {
        if (yearLeftInSchool == 2) {
          feedback.html("" + majors[1]);
        } else if (yearLeftInSchool == 3) {
          feedback.html("" + majors[0]);
        } else if (yearLeftInSchool == 4) {
          feedback.html("" + majors[2]);
        } else {
          feedback.html("" + majors[3]);
        }
      } else {
        feedback.html("You need a grade greater than 50 to decide...");
      }
    } else {
      feedback.html("You need to graduate from high school first before you can get access to any university...");
    }

  } else if (problemSolving == problemArray[1]) {
    if (highSchoolGraduation == 'yes') {
      if (grade >= 50) {
        if (yearLeftInSchool == 2) {
          feedback.html("" + majors[4]);
        } else if (yearLeftInSchool == 3) {
          feedback.html("" + majors[5]);
        } else if (yearLeftInSchool == 4) {
          feedback.html("" + majors[6]);
        } else {
          feedback.html("" + majors[7] + " or " + majors[8]);
        }
      } else {
        feedback.html("You need a grade greater than 50 to decide...");
      }
    } else {
      feedback.html("You need to graduate from high school first before you can get access to any university...");
    }

  } else if (problemSolving == problemArray[2]) {
    if (highSchoolGraduation == 'yes') {
      if (grade >= 50) {

        if (yearLeftInSchool == 2) {
          feedback.html("" + majors[10]);
        } else if (yearLeftInSchool == 3) {
          feedback.html("" + majors[11]);
        } else if (yearLeftInSchool == 4) {
          feedback.html("" + majors[12]);
        } else {
          feedback.html("" + majors[11]);
        }

      } else {
        feedback.html("You need a grade greater than 50 to decide...");
      }

    } else {
      feedback.html("You need to graduate from high school first before you can get access to any university...");

    }
  }
}