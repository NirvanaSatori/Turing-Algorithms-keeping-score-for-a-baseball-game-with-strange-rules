/**
 * @param {string[]} ops  -  List of operations
 * @return {number} - Sum of scores after performing all operations
 */

const ops = ["5", "2", "C","D","+"]
// const ops = ["5", "-2", "4","C","D","9","+"]


const calPoints = function(ops)  {
    let result = null
    let record = []
    for(i=0; i<ops.length; i++){
        if(!Number.isNaN(ops[i])){
            record.push(i)
        }
        record = ops.filter(op => Number(op))

        if(ops[i] === "C"){
            record = record.slice(0,-1)
        }
        console.log(record)
        if(ops[i] === "D"){
            let double = record[-1]*2
            record = [...record,double ]
        }
        // if(ops[i] === "+"){
        //     let sum = ops[-1] + ops[-2]
        //     record = [...record,sum ]
        // }
    }
    // record = record.filter(x => !Number.isNaN(x));
    console.log(record.slice())
    return result
}

// let ops = readline().split(" ")

console.log(calPoints(ops))