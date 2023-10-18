/**
 * @param {string[]} ops  -  List of operations
 * @return {number} - Sum of scores after performing all operations
 */

// const ops = ["5", "2", "C", "D", "+"]

const calPoints = function(ops)  {
    let result = null
    const newOps = ops.map(string => {
        if(ops.length>=1 && string === "C" ){
           return ops.pop()
        }
        if (ops.length>=1 && string ==="D"){
            return ops.push(ops[-1]*2)
        } 
        if(ops.length>=2 && string ==="+" ){
            return ops.push(ops[-1] + ops[-2])
         }
    })
    result = newOps.reduce((total, string)=>{
        let integer = string.split(" ")
        if (integer !== "C" || "D"){
           return total += integer
        }
    }, 0)
    return result
}

let ops = readline().split(" ")

console.log(calPoints(ops))