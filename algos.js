/**
 * @param {string[]} ops  -  List of operations
 * @return {number} - Sum of scores after performing all operations
 */

const ops = ["5", "2", "C","D","+"]
// const ops = ["5", "-2", "4","C","D","9","+"]
//5-2-4+9+5

const calPoints = function(ops)  {
    let result = null
    let record = []
    for(i=0; i<ops.length; i++){
        if(Number(ops[i])){
            record.push(ops[i]*1)
        }
        if(ops[i] === "C"){
            record.pop()
        }
        if(ops[i] === "D"){
            console.log(record.length-1)
            let lastIndex = record.length-1
            let double = record[lastIndex]*2
            record.push(double)
        }
        if(ops[i] === "+"){            
            // let sum = record.reduce((total, x) => total+=x)
            let lastIndex = record.length-1
            let sum = record[lastIndex]+ record[lastIndex-1]
            record.push(sum)
        }
        console.log(record)
    }

    result = record.reduce((total, string)=>{
        return total += Number(string)}, 0)

    return result
}

// let ops = readline().split(" ")

console.log(calPoints(ops))