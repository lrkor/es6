class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }
}

var person1 = new Person('张三','15');
person1.sayName();