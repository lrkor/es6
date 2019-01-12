//Set 结构不会添加重复的值
const set = new Set();

let arr = [1,2,3,4,4,4,4,4,4];

arr.forEach(x=>set.add(x));

console.log(set);

