//function that return array of fibonacci sequence using  iterative method

function fibs(num){
    let a = 0;
    let b = 1;
    let result = [];
    result.push(a)
    result.push(b)
    
    for(let i = 0;i < num - 2; i++){
        let c = a + b
        a = b
        b = c
        result.push(c)
    }
    return result
}
//recursion version 
//the base case is when number is 0 and 1 return 0 and 1 respectively 
function fibsRecursion(num){
    if(num === 0 ) return 0
    if(num === 1 ) return 1
    
    else{
     return  fibsRecursion(num - 1) +  fibsRecursion(num - 2) 
    }
}
//a function that return an array of fibonacci sequence for  a given number
function fibsRec(num){
    let result = []
   for(let i = 0; i < num; i++ ){
        result.push(fibsRecursion(i))
       }
    return result
   }


