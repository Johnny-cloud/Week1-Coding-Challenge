//select from the html page where to place our values
let textTotalPoints = document.querySelector('#total-points');

//set the speed and demerit points
let baseSpeed = 70;
let demeritPoint = 0;
let speedAbove = 0;

//get the speed from the user
// let inputSpeed = parseInt(prompt("Enter the car's speed"));
let inputSpeedAttr = document.querySelector('#input-speed');
let form = document.querySelector('#speed-form');

function getFormValues() {
    inputSpeed = inputSpeedAttr.value ;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getFormValues();
    //get to know if the speed is above the 70 km/s
    speedAbove = inputSpeed - baseSpeed;
    //get the demerit points
    demeritPoint = Math.floor(speedAbove / 5);
    checkDemeritPoint();
})







//check the demerit point and update the text in the html page
function checkDemeritPoint() {
    if(demeritPoint <= 0){

        textTotalPoints.textContent = "Okay";
        console.log("Okay!");
    
    }else if(demeritPoint > 0 && demeritPoint < 13){
    
        textTotalPoints.textContent = demeritPoint;
    
    }else if(demeritPoint > 12){
    
        let speedContainer = document.querySelector('#speed-container');
        speedContainer.style.backgroundColor = "#E10600";
        textTotalPoints.textContent = "License suspended!"
        console.log("Licence suspended!");
          
    }

}
console.log(demeritPoint);


