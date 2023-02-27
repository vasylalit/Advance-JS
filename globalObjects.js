var fruit = "apple"

function testApple(){    //Here, a function will be called as glabal function, not a variable is global
    var fruit = "apple"
    console.log(fruit)
}
testApple()

// If we use 'let' variable, it won't be global scope
// For global scope, we need to use 'var' variable