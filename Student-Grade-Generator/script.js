//get grade text area
let grade = document.querySelector('#grade');

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
    if(studentMarks > 79){
        grade.textContent = "A";
    
    }else if(studentMarks >= 60){
        grade.textContent = "B";
    }else if(studentMarks >= 49){
        grade.textContent = "C";
    }else if(studentMarks >= 40){
        grade.textContent = "D";
    }else if(studentMarks < 40){
        grade.textContent = "E"
    }else{
        grade.textContent = "-";
    }
}
