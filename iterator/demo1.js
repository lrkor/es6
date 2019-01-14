/**
 * 迭代器
 * （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 * （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 * （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 * （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 * **/

// var it = makeIterator(['a', 'b']);
//
// console.log(it.next()); // { value: "a", done: false }
// console.log(it.next());// { value: "b", done: false }
// console.log(it.next()); // { value: undefined, done: true }
//
// function makeIterator(array) {
//     let nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < array.length ?
//                 {value: array[nextIndex++]} :
//                 {done: true};
//         }
//     };
// }
console.log(10000000000000.0003.toString());