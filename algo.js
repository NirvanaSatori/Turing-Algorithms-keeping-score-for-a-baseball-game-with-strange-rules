/**
 * @param {string[]} ops  -  List of operations
 * @return {number} - Sum of scores after performing all operations
 */

// const ops = ["5", "2", "C","D","+"]
const ops = ["5", "-2", "4","C","D","9","+"]


const calPoints = function(ops)  {
    let result = null
    let record = []
    const newScore = ops.map(string =>{
        if(Number(string)){
            record.push(string*1)
        }
        if(string === "C"){
            record.pop()
        }
        if(string === "D"){
            console.log(record.length-1)
            let lastIndex = record.length-1
            let double = record[lastIndex]*2
            record.push(double)
        }
        if(string === "+"){            
            let lastIndex = record.length-1
            let sum = record[lastIndex]+ record[lastIndex-1]
            record.push(sum)
        }
        return record

    })

    result = newScore[0].reduce((total, string)=>{
           return total += string
    }, 0)
    return result
}

// let ops = readline().split(" ")

console.log(calPoints(ops))