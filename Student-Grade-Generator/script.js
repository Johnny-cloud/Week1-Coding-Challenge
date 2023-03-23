//get grade text area
let grade = document.querySelector('#grade');
let gradeContainer = document.querySelector('#grade-container');

grade.textContent = "Calculating ......";

//get student marks 
let studentMarks = "";
let studentMarksInput = document.querySelector('#student-marks-input');

//get form values
function getFormValues() {
    //set student marks
    studentMarks = studentMarksInput.value ;
}

//prevent submit default on form
let form = document.querySelector('#student-grade-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getFormValues();
    setGrade();

})

//Check student marks against different conditions and print the necessary grades on the screen
function setGrade(){
    if(studentMarks > 100 || studentMarks < 0){
        grade.textContent = "Invalid input";
        gradeContainer.style.backgroundColor = "red";
    }else if(studentMarks > 79){
        grade.textContent = "A";
        gradeContainer.style.backgroundColor = "green";
    }else if(studentMarks >= 60){
        grade.textContent = "B";
        gradeContainer.style.backgroundColor = "green";
    }else if(studentMarks >= 49){
        grade.textContent = "C";
        gradeContainer.style.backgroundColor = "green";
    }else if(studentMarks >= 40){
        grade.textContent = "D";
        gradeContainer.style.backgroundColor = "green";
    }else if(studentMarks < 40){
        grade.textContent = "E"
        gradeContainer.style.backgroundColor = "green";
    }else{
        grade.textContent = "-";
        gradeContainer.style.backgroundColor = "green";
    }
}
