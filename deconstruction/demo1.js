/**
 * 变量的解构
 * **/

/**
 * 变量赋值
 * **/

let [a,b,c] = []; //[] 为undefined ['']为空
// console.log(a,b,c);

let [herd,...tail] = [1,2,3,4];
// console.log(herd);
// console.log(tail);

function f() {
    console.log('我是一个表达式');
}

let [x = f()] = [1];
