import { Person } from "./Bai1";
import { Student } from "./Bai2";
import { Car } from "./Bai3";
import { Rectangle } from "./Bai4";

var person = new Person('Duy', 30);
var student = new Student('Duy', 30, 10);
var car = new Car('Vinfast', 'VF3', 2024);
var rectangle = new Rectangle(10,5);
console.log(person);
console.log(student);
console.log(car);
console.log('Area' + rectangle.calculateArea());
console.log('Perimeter' + rectangle.calculatePerimeter());