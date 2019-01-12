/**
 遍历操作
 **/

/**
 keys()：返回键名的遍历器
 values()：返回键值的遍历器
 entries()：返回键值对的遍历器
 forEach()：使用回调函数遍历每个成员
 **/

/**
 Set的遍历顺序就是插入顺序。这个特性有时非常有用，
 比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
 **/

/**
 Set 结构没有键名，只有键值
 **/

let set =new Set(['one','two','three']);

// for (let item of set.keys()){
//     console.log(item);
// }

// for (let item of set.values()){
//     console.log(item);
// }

// for (let item of set.entries()){
//     console.log(item);
// }

/**
 * 遍历的应用
 * 1.扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构
 * **/

let set1 = new Set(['one','two','three']);
console.log([...set1]);

/**
 * 因此使用 Set 可以很容易地实现并集（Union）
 * 、交集（Intersect）和差集（Difference）
 * **/

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}


