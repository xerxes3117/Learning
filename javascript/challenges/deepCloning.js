var student1 ={ 
  name : "Manish",
  company : "Gfg",
  info: {
    address: "delhi",
    phone: "981199119"
  }
}

//Clones only at top level
var student2 =  { ...student1 } ;
var student4 = Object.assign( {} ,student1) ;

//Clones at deep nested level
var student3 =  JSON.parse(JSON.stringify(student1)) ;

student1.name = "Rakesh"
student1.info.phone = "9811"

//Testcases
//Top level cloning
console.log("student 1 name is",student1.name); //Rakesh
console.log("student 2 name is ",student2.name); //Manish
console.log("student 3 name is ",student3.name); //Manish
console.log("student 4 name is ",student4.name); //Manish

//Deep cloning
console.log("student 1 phone is",student1.info.phone) //"9811"
console.log("student 2 phone is ",student2.info.phone); //"9811"
console.log("student 3 phone is ",student3.info.phone); //"981199119" 
console.log("student 4 phone is ",student4.info.phone); //"9811"