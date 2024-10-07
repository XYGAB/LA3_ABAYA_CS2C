const ps = require('prompt-sync')();
const prompt = (ps);
//using prompt to make the user enter a number
let limit = prompt('Enter the Limit of the Double Loop: ')

//it converts the limit to number
limit = Number(limit);

    //double Loop Statement to  for the map of iterations
    for (let counter1 = 0; counter1 < limit; counter1++) {
        for (let counter2 = 0; counter2 < limit; counter2++) {
            //variable that will add the current values of the counters for each iteration
            let addedValue = counter1 + counter2;

            // Log all to the console
            console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
        }
    }