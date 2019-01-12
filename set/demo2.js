//Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

//例一
const set = new Set([1, 2, 3, 4, 4]);

console.log([...set]);
console.log(set.size);

// 去除数组的重复成员
// [...new Set(array)]
// 去除字符串里面的重复字符。
// [...new Set('ababbc')].join('')

//两个对象总是不相等的
// let set = new Set();
//
// set.add({});
// set.size // 1
//
// set.add({});
// set.size // 2