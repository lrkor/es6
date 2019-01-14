/**
 * 定义多边形类
 * **/
class Polygon {
    constructor(Ox,Oy){
        this.Ox = Ox;
        this.Oy = Oy;
    }
    sayCoordinate(){
        console.log('我的中心坐标是OX:'+this.Ox+' OY:'+this.Oy);
    }

    static sayName(){
        console.log('我是一个多边形');
    }
}

/**
 * 定义圆
 * **/
class Circle extends Polygon{
    constructor(Ox,Oy,r){
        super(Ox,Oy);
        this.r = r;
    }

    area(){
        console.log('我的面积是' + Math.PI*this.r*this.r);
    }
}

/**
 * 定义椭圆
 * **/
class Ellipse extends Circle{
    constructor(Ox,Oy,a,b){
        super(Ox,Oy);
        this.a = a;
        this.b = b;
    }

    area() {
        console.log('我的面积是' + Math.PI*this.a*this.b);
    }
}

/**
 * 定义矩形
 * **/
class Rectangle extends Polygon{
    constructor(Ox,Oy,l,w){
        super(Ox,Oy);
        this.l = l;
        this.w = w;
    }

    area(){
        console.log('我的面积是' +this.l*this.w);
    }
}

//实例化一个多边形
let polygon1 = new Polygon(1,2);
// polygon1.sayCoordinate();

//实例化一个圆
let circle1 = new Circle(2,2,2);
// circle1.sayCoordinate();
// circle1.area();

//实例化一个矩形
let rectangle1 = new Rectangle(1,2,5,3);
// rectangle1.sayCoordinate();
// rectangle1.area();

//实例化一个椭圆
let ellipse = new Ellipse(1,2,5,3);
// ellipse.sayCoordinate();
// ellipse.area();
