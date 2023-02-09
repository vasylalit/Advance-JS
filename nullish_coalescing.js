// var user = {
//     student : {
//         name : "Abhay",
//         age : 25
//     }
// }
// console.log(user.student.name)   // Abhay
// console.log(user.student.age)    //25

// ====

var user = { 
    student : {
        // name : "Rachit",
        age : 0
    }
}
console.log(user.student.name ?? "unknown");  // it will print 'unknown', if name key doesn't exists
console.log(user.student.age ?? 21)    //if age value doesn't exists, it will print 21 as a default