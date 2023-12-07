const startTime = performance.now()
const fs = require('node:fs');
const readline = require('readline');

function trebuchet(inputFile) {
    
    let sumArray = [] 

    let input = readline.createInterface({
        input: fs.createReadStream(inputFile),
    }) 

    input.on('line', function(line) {
        let num1 = ''
        let num2 = ''
        
        // Find first digit
        for(let i = 0; i <= line.length; i++) {

            if(parseInt(line[i]) && num1 === '') {
                num1 = line[i]
            }
        }

        // Find last digit
        for(let i = line.length; i >= 0; i--) {

            if(parseInt(line[i]) && num2 === '') {
                num2 = line[i]
            }
        }
        
        sumArray.push(num1 + num2)
    })

    input.on('close', function() {
        let finalSum = 0

        for(let i = 0; i < sumArray.length; i++) {
            finalSum += parseInt(sumArray[i])    
        }

        console.log(`Your result is: ${finalSum}`)
    })
}

trebuchet('values.txt')

const endTime = performance.now()

console.log(`Trebuchet took ${endTime - startTime} milliseconds`)
