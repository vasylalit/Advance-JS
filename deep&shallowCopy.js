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
var obj = { 
    name : "Shane",
    address : {
        city : "Ahmedabad",
        state : "Gujarat"
    },
    getData : function(){   //functions and date formats won't work here with stringify method
        return this.name + " " + this.address.city
    }
}
var user = _.cloneDeep(obj)
user.address.city = "Nagpur"
user.address.state = "Maharashtra"
user.name = "Lalit"
console.log(obj)
console.log(user)
console.log(obj.getData())
console.log(user.getData())
// 👆This code will run on the web page assigned to the deepCopy.html

// ====================================================================================================================

