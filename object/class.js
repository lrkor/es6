class Eat {
    static eat(type) {
        console.log(type+'都要吃东西');
    }
}

class Person extends Eat {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

//    父类的静态方法会被子类继承
//     static eat(){
//         console.log('人都要吃饭');
//     }
}

class Student extends Person {
    constructor(name, age, id) {
        super(name, age); // 调用父类的constructor(x, y)
        this.id = id;
    }

    //    说id
    sayId() {
        console.log(this.id);
    }

    //    说名字
    sayName() {
        return super.sayName();
    }

}

let person1 = new Person('张三', '15');
let student = new Student('学生', '15', '1401010076');
// student.sayId();
// student.sayName();
// Student.eat();
// person1.sayName();
// Person.eat('人');
// Student.eat('学生');



