const { name } = require("ejs")

// Object 
var obj = {
    name : "Anil",
    10 : "This is a number",
    true : "This is a boolean"
}
obj.city = "Nagpur"
console.log(obj.name)
// console.log(obj.10) //fat gaya
// console.log(obj[10])
// console.log(obj.true)


// ===============================
// Map
var data = new Map([
    ["name", "Lalit"],
    [10, "This is a number in map"],
    [true, "This is boolean in map"]
])
data.set("city", "mumbai")
// data.set({}, "This is an object type")
// data.set(()=>{}, "this is a arrow function type")

// data.set("city", "Amravati")  //This will overrite city --> Mumbai to Amravati
// data.delete(true)
// console.log(data.get(10))
// console.log(data.get(true))
// console.log(data.keys())
// console.log(data.values())
// console.log(data.size)
// console.log(data.has("name"))
// console.log(typeof data)
// console.log(data)

// data.forEach((v,k)=>{
//     console.log(k,v)
// })

// for([k, v] of data){
//     console.log(k)
// }



// var obj1 = {
//     name : "Lalit",
//     20 : "This is number",
//     true : "This is boolean"
// }
// obj1.surname = "Dhurvey"
// obj1.name = "Rajeshree"
// // console.log(obj1[20])
// // console.log(obj1[true])

// var map1 = new Map([
//     ["name", "Akash"],
//     [30, "this is number"],
//     [true, "this is boolean"]
// ])
// console.log(map1.get(30))