import '../css/index.scss'

 class Vehicle {
    constructor(_color) {
          this.color=_color;
    }
 
    showTheTypeAndColor(_type,_color) {
     console.log(`This car is ${_type} and has color ${_color}`);
    }

    set colorName(_color){
          this.color=_color;
    }
    get colorName(){
         return  this.color;
    }
}
 

let car= new Vehicle("Green");
car.showTheTypeAndColor('sedan','red');
console.log(car.colorName);