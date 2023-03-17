//get grade text area
let grade = document.querySelector('#grade');

grade.textContent = "Calculating ......";

//get student marks 
let studentMarks = parseInt(prompt("Enter the student's marks: "));

//Check student marks against different conditions and print the necessary grades on the screen
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
    grade.textContent = "Invalid input";
}