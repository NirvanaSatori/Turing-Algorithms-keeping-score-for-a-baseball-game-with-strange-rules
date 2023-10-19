/**
 * @param {string[]} ops  -  List of operations
 * @return {number} - Sum of scores after performing all operations
 */

const ops = ["5", "2", "C","D","+"]
// const ops = ["5", "-2", "4","C","D","9","+"]


const calPoints = function(ops)  {
    let result = null
    // let record = ops.filter(op => Number(op)*1)
    // console.log(record)
    const newScore = ops.map(string =>{
        
        let record = ops
        if(Number(string)){
            let num = Number(string)
            // [...ops,num]
            // record = ops.filter(op => (op)*1)
            // console.log(num)
        //    return ops.shift(num)
        }
        console.log(record)
        // if(ops.length>1 && string === "C"){
        //     // let cPosition= 
        //     return ops.pop()
        //     // record = [...record.slice(-1)]
        // }
        // if(record.length>1 && string === "D"){
        //     let double = (record[-1])*2
        //    record.push(double)
        // }
        // if(record.length>2 && string === "+"){
        //     let sum = (record[-1]+ record[-2])
        //     record.push(sum)
        // }
        
        // return record
    })
    console.log(newScore)
    result = newScore.reduce((total, string)=>{
           return total += Number(string)
    }, 0)
    return result
}

// let ops = readline().split(" ")

console.log(calPoints(ops))