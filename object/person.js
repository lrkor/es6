//人
function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    //说名字
    sayName:function () {
        console.log(this.name);
    },
    //说年龄
    sayAge:function () {
        console.log(this.age);
    }
};

// 学生
function Student(name,age,id){
    Person.call(this);
    this.name = name;
    this.age = age;

    //增加学生自己的属性
    this.id = id;

    //增加学生自己的方法
    this.sayId = function () {
        console.log(this.id);
    }

}

//老师
function Teacher(name,age,subjects){
    Person.call(this);
    this.name = name;
    this.age = age;

    //增加老师自己的属性
    this.subjects = subjects;

    //增加老师自己的方法
    this.sayRoll = function () {
        console.log("我叫："+ this.name+"是你们"+this.subjects+ "现在开始点名啦");
    }

}

Student.prototype = new Person();
Teacher.prototype = new Person();

let person1 = new Person('张三','18');

let student1 = new Student('学生1','15','2222');
let teacher1 = new Teacher('老师1','28','语文老师');

// student1.sayAge();
// student1.sayId();
teacher1.sayRoll();

// person1.sayName();
// person1.sayAge();
