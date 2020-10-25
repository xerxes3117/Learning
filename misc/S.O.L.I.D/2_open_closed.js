//O - Open-closed
//Object or entities should be open for extension but closed for modification
//In the above code sumAreas function inside AreaCalculator class has an issue
//If more shapes are introduced we'll have to add new if/else blocks and thus modify the class
//To rectify this we can add area logic inside Square and Circle class instead
class AreaCalculater {
  constructor(shapes = []) {
    this.shapes = shapes;
    this.sum = 0;
  }

  sumAreas() {
    this.shapes.forEach(d => {
      this.sum += d.area()
    });
  }

  outputArea() {
    return this.sum.toFixed(2);
  }
}

class SumCalculatorOutputter {
  constructor(val) {
    this.val = val;
  }
  formatVal() {
    //logic to output sum as json or html etc. depending upon requirement
  }
}

class Square {
  constructor(val) {
    this.length = val;
    this.type = "square";
  }
  area() {
    return Math.pow(this.length, 2);
  }
}

class Circle {
  constructor(val) {
    this.radius = val;
    this.type = "circle";
  }
  area() {
    return 3.14 * Math.pow(this.radius, 2);
  }
}

let circle1 = new Circle(3);
let square1 = new Square(4);

let areaCalc = new AreaCalculater([circle1, square1]);
areaCalc.sumAreas();
let output = new SumCalculatorOutputter(areaCalc.outputArea());
output.formatVal();

console.log("sum of areas: ", output.val);

