function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibonacciSeq = [];
    
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            fibonacciSeq[i] = i;
        } else {
            fibonacciSeq[i] = fibonacciSeq[i - 2] + fibonacciSeq[i - 1];
        }
    }

    return fibonacciSeq; 
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
