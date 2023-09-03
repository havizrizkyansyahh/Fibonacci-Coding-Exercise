function fibonacciGenerator (n) {
    var fibonacciSeq = [];
    
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            fibonacciSeq[i] = i;
        } else {
            fibonacciSeq[i] = fibonacciSeq[i - 2] + fibonacciSeq[i - 1];
        }
    }

    return fibonacciSeq; 
}
