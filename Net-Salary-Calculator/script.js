let paye = 0;
let NHIFDeductions = 0;
let NSSFDeductions = 0;
let grossSalary = 0;
let netSalary = 0;
let taxablePay = 0;

//get user input
grossSalary = parseInt(prompt("Enter the gross salary : "));

if(grossSalary){ //Ensures no empty value is calculated

    calculateNHIFdeductions(grossSalary);
    calculateNSSFdeductionsOldRates(grossSalary);
    calculatePAYEperMonth(grossSalary);

    //calculate the net salary after all other deductions.
    calculateNetSalary();

}

function calculatePAYEperMonth(grossSalary){

    if(grossSalary <= 24000){
        taxablePay = 24000;
        paye = taxablePay * 0.1;

    }else if(grossSalary <= 32333){
        taxablePay = 8333.33;
        paye = taxablePay * 0.25;

    }else if(grossSalary > 32333){
        taxablePay = 16586.67;
        paye = taxablePay * 0.30;

    }

     paye = Math.floor(paye);
     return paye;
}

function calculateNHIFdeductions(grossSalary){

    if(grossSalary <= 5999){
        NHIFDeductions = 150;

    }else if(grossSalary <= 7999){
        NHIFDeductions = 300;

    }else if(grossSalary <= 11999){
        NHIFDeductions = 400;

    }else if(grossSalary <= 14999){
        NHIFDeductions = 500

    }else if(grossSalary <= 19999){
        NHIFDeductions = 600

    }else if(grossSalary <= 24999){
        NHIFDeductions = 750

    }else if(grossSalary <= 29999){
        NHIFDeductions = 850

    }else if(grossSalary <= 34999){
        NHIFDeductions = 900

    }else if(grossSalary <= 39999){
        NHIFDeductions = 950

    }else if(grossSalary <= 44999){
        NHIFDeductions = 1000

    }else if(grossSalary <= 49999){
        NHIFDeductions = 1100

    }else if(grossSalary <= 59999){
        NHIFDeductions = 1200

    }else if(grossSalary <= 69999){
        NHIFDeductions = 1300

    }else if(grossSalary <= 79999){
        NHIFDeductions = 1400

    }else if(grossSalary <= 89999){
        NHIFDeductions = 5100

    }else if(grossSalary <= 99999){
        NHIFDeductions = 1600

    }else if(grossSalary >= 100000){
        NHIFDeductions = 1700

    }

    return NHIFDeductions;
}


function calculateNSSFdeductionsNewRates(pensionablePay) {

   NSSFDeductions = Math.floor (0.6 * pensionablePay) ; //Remove decimal points

   return NSSFDeductions;
    
}

function calculateNSSFdeductionsOldRates(grossSalary) {
    
    NSSFDeductions = Math.floor(0.05 * grossSalary);

    return NSSFDeductions;
}

function calculateNetSalary() {

    netSalary = grossSalary - paye - NHIFDeductions -NSSFDeductions;

    return netSalary;
}

let textGrossSalary = document.querySelector('#gross-salary');
textGrossSalary.textContent = grossSalary;

let textPaye = document.querySelector('#paye');
textPaye.textContent = paye;

let textNHIFdeductions = document.querySelector('#nhif-deductions');
textNHIFdeductions.textContent = NHIFDeductions;

let textNSSFdeductions = document.querySelector('#nssf-deductions');
textNSSFdeductions.textContent = NSSFDeductions;

let textNetSalary = document.querySelector('#net-salary');
textNetSalary.textContent = netSalary;