var userArr = [
    {id:0,name:'张三',age:16},
    {id:1,name:'王五',age:25},
    {id:2,name:'王一',age:14},
    {id:3,name:'王二',age:13},
];

class User {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    //获取功能
    get(){
        console.log('获取自己信息');
        let id = this.id;
        userArr.forEach(function (value,index) {
            if(value.id === id){
                console.log(value);
            }
        });
    }

    static say(){
        console.log('用户都可以说话');
    }
}

class Administrator extends User{
    constructor(name,id,post){
        super(name,id);
        this.post = post;
    }

    //添加功能
    add(obj){
        console.log('添加信息');
        userArr.push(obj);
        console.log(userArr);
    }

    //删除功能
    del(id){
        console.log('删除信息');
        let flag = false;
        userArr.forEach(function (value,index) {
           if(value.id === id){
               userArr.splice(index,1);
               flag = true;
           }
        });
        if(flag){
            console.log(userArr);
        }else {
            console.log('暂无此人');
        }
    }

    //更新功能
    update(id,obj){
        console.log('更新信息');
        let flag = false;
        userArr.forEach(function (value,index) {
            if(value.id === id){
                flag = true;
                for(let i in obj){
                    value[i] = obj[i];
                }
            }
        });
        if(flag){
            console.log(userArr);
        }else {
            console.log('暂无此人');
        }
    }

    //查询功能
    query(id){
        console.log('查询信息');
        let flag = false;
        userArr.forEach(function (value,index) {
            if(value.id === id){
                console.log(value);
                flag = true;
            }
        });
        if(flag){
        }else {
            console.log('暂无此人');
        }
    }

}

let administrator = new Administrator('张三',0,'管理员');

let obj1 = {id:7,name:'人员一',age:56};
let objUpdate1 = {name:'修改一下',age:77};

// administrator.get();
// administrator.add(obj1);
// administrator.del(2);
administrator.update(1,objUpdate1);
// administrator.query(3);

// Administrator.say();


