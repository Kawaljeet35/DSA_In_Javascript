function fib(num){
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}

//Memoization Solution (Dynamic Programming)
function fib(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var res =  fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

//Tabulation Approach (Dynamic Programming)
function fib_table(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n];
}

console.log(fib(4)); //3
console.log(fib(10)); //55
console.log(fib(28)); //317811
console.log(fib(35)); //9227465