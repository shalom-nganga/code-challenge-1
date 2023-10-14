let prompt = require('prompt-sync')();
let input = prompt('enter salary:')
let salary = parseFloat(input)

const pay = salary
// const nssf = 0;
function netTax(){

    if(pay <=24000) return (pay *0.1)
    else if (24001<=pay && pay<=32333)return(pay *0.25)
    else if (32334<= pay && pay <=500000)return(pay *0.3)
    else if (500001 <= pay && pay <=800000)return(pay *0.325) 
    else if (pay > 800000)return(pay *0.35)

}

console.log(("Net tax:")+(netTax)(salary))

function nhif(){

    if(pay<5999)return 150
    if(6000 <= pay&& pay <=7999)return 300
    if(8000 <= pay && pay <=11999)return 400
    if(12000 <= pay && pay <= 14999)return 500
    if(15000 <= pay && pay <=19999)return 600
    if(20000 <= pay && pay <= 24999)return 750
    if(25000 <= pay && pay <= 29999)return 850
    if(30000 <= pay && pay <= 34999)return 900
    if(35000 <= pay && pay <= 39999)return 950
    if(40000 <= pay && pay <=44999)return 1000
    if(45000 <= pay && pay <= 49999)return 1100
    if(50000 <= pay && pay <= 59999)return 1200
    if(60000 <= pay && pay <= 69999)return 1300
    if(70000 <= pay && pay <= 79999)return 1400
    if(80000 <= pay && pay <= 89999)return 1500
    if(90000 <= pay && pay <= 99000)return 1600
    else if (pay > 100000)return 1700

}

console.log(("NHIF:") + (nhif(salary)))


function calculatePension (salary) {
return salary * 0.06;
}
const Pensiondeduction = calculatePension(salary);

// console.log(("Net income:") + salary - (netTax() + nssf))
console.log("Net income:", + salary - netTax() - nhif() - Pensiondeduction);
