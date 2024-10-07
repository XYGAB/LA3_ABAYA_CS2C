const ps = require('prompt-sync')();
const prompt = (ps);
//declaring a variable
let score = prompt("Enter your score:");
let Average = parseFloat(score);

const result = (typeof Average === 'number' && Average !== null) ? {
    //using conditional ternary upon determining the grade
     grade : (Average >= 97) ? "1.00 Excellent" : (Average >= 94) ? "1.25 Excellent" :
             (Average >= 91) ? "1.50 Above Average" : (Average >= 88) ? "1.75 Above Average" :
             (Average >= 85) ? "2.00 Average" : (Average >= 82) ? "2.25 Average" :
             (Average >= 79) ? "2.50 Below Average" : (Average >= 76) ? "2.75 Below Average" :
             (Average == 75) ? "3.00 Below Average" : (Average >= 72) ? "4.00 Poor" : "5.00 Poor",
                  
    //final remarks using conditional ternary
     remarks : (Average >= 90) ? "HIGH PASS, Candidate for Cum Laude" : (Average >= 80) ? "AVERAGE PASS" : (Average >= 75) ? "LOW PASS" : "FAILED, Needs Improvement"
    
} : { grade: "Invalid", remarks: "Please enter a valid number." };
// log results to the console
console.log("Result:".toLocaleUpperCase());
console.log("Your equivalent Grade is ".concat(result.grade));
console.log("Final Remarks: ".concat(result.remarks));