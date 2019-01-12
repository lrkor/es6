/**
 * WeakSet
 * WeakSet 的成员只能是对象，而不能是其他类型的值
 * WeakSet 中的对象都是弱引用:
 *      如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，
 *      不考虑该对象还存在于 WeakSet 之中
 * **/

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws);