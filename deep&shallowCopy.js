// var obj = {
//     name : "Peter"
// }
// var user = obj
// user.name = "David"
// console.log(obj)
// The above solution won't satisfied.
// =========================

// Shallow Copying👇
// var obj = {
//     name : "Lalit"
// }
// var user = (Object.assign({},obj))
// user.name = "Bruce"
// console.log(obj)
// console.log(user)

// ===

// var obj = { 
//     name : "Hemant"
// }
// var user = {...obj}
// user.name = "Rupal"
// console.log(obj)
// console.log(user)

// ==============================

// Deep copying👇
// var obj = { 
//     name : "Shane",
//     address : {
//         city : "Ahmedabad",
//         state : "Gujarat"
//     },
//     getData : function(){   //functions and date formats won't work here with stringify method
//         return this.name + " " + this.address.city
//     }
// }
// var user = JSON.parse(JSON.stringify(obj))
// user.name = "Lalit"
// user.address.city = "Nagpur"
// user.address.state = "Maharashtra"
// console.log(obj.getData())
// console.log(user)

// ===
// var obj = { 
//     name : "Shane",
//     address : {
//         city : "Ahmedabad",
//         state : "Gujarat"
//     },
//     getData : function(){   //functions and date formats won't work here with stringify method
//         return this.name + " " + this.address.city
//     }
// }
// var user = _.cloneDeep(obj)
// user.address.city = "Nagpur"
// user.address.state = "Maharashtra"
// user.name = "Lalit"
// console.log(obj)
// console.log(user)
// console.log(obj.getData())
// console.log(user.getData())
// 👆This code will run on the web page assigned to the deepCopy.html

// ====================================================================================================================


// Shallow copy
var person1 = {
    name : "Akash",
    surname : "Thakre",
    getFullName : function(){
        return this.name + " " +  this.surname
    }
}
var user = (Object.assign({}, person1))
user.name = "Lalit"
user.surname = "Dhurvey"
// console.log(user.getFullName());

//  ==== 
var person2 = {...person1}
person2.name = "Akshay"
person2.surname = "Saini"
var user2 = {...person2}
user2.name = "Murali"
user2.surname = "Sharma"
// console.log(person2.getFullName())
// console.log(user2.getFullName())

// ====
// Deep copy

var totalMarks = {
    getTotalMarks : function(){
        return this.studentName + " " + (this.marks.maths+this.marks.physics)
    }
}

var person3 = {
    studentName : "Suraj",
    marks : {
        maths : 65,
        physics : 55
    }
}


var user3 = JSON.parse(JSON.stringify(person3))
user3.studentName = "Roshan"
user3.marks.maths = 85
user3.marks.physics = 79
// console.log(user3);
person3.__proto__ = totalMarks
user3.__proto__ = totalMarks
console.log(person3.getTotalMarks());
console.log(user3.getTotalMarks());

// ===

var person4 = {
    employeeName : "Vaibhav",
    getFeedback : function(){
        console.log(this.employeeName +  " is performing very good")
    }
}
var user4 = _.cloneDeep(person4)
user4.employeeName = "Lalit"
// console.log(user4.getFeedback())
// console.log(person4.getFeedback())
console.log(person4)
console.log(user4)
