
Object.prototype.generalProto = "This is global prototype"

Object.prototype.myData = function(){
    return "custom function"
}

String.prototype.otherData = "This is string prototype"

String.prototype.customLength = function(){
    return this.length+2
}

var person1 = {
    name : "Akash",
    surname : "Thakre",
    birth : 1996
}

var person2 = {
    name : "Lalit",
    surname : "Dhurvey",
    birth : 1999
}

var users = {
    getFullName : function(){
        return this.name + " " + this.surname
    },
    getAge : function(){
        let age = new Date().getFullYear() - this.birth
        return age
    }
}

person1.__proto__ = users
person2.__proto__ = users

// console.log(person1.getFullName())
// console.log(person1.getAge())

// console.log(person2.getFullName())
// console.log(person2.getAge())

console.log(person1.generalProto)
console.log(person2.myData());

console.log("Hello".otherData)
console.log(person1.name.otherData)

console.log(person2.name.customLength())
