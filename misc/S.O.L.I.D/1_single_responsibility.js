//S - Single responsibility
//A Class should have one and only one reason to change
//(i.e. it should have only one job)
//Note that in the code below each class has only one job
//we could easily combine the AreaCalculator and SumCalculatorOutputter but that would mean 2 jobs in one class
//so we divide them into 2 classes
class AreaCalculater {
    constructor(shapes = []) {
      this.shapes = shapes;
      this.sum = 0;
    }
  
    sumAreas() {
      this.shapes.forEach(d => {
        if (d.type == "circle") {
          this.sum += 3.14 * Math.pow(d.radius, 2);
        }
        if (d.type == "square") {
          this.sum += Math.pow(d.length, 2);
        }
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
  }
  
  class Circle {
    constructor(val) {
      this.radius = val;
      this.type = "circle";
    }
  }
  
  let circle1 = new Circle(3);
  let square1 = new Square(4);
  
  let areaCalc = new AreaCalculater([circle1, square1]);
  areaCalc.sumAreas()
  let output = new SumCalculatorOutputter(areaCalc.outputArea());
  output.formatVal();
  
  console.log("sum of areas: ", output.val);