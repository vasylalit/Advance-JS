// var data = [2,4,5,6,7]
// var result = data.map(item=> 10*item)
// console.log(result)


var data2 = [2,6,8,4,3]
Array.prototype.customMap = function(x){
    const result = []
    for(i=0; i< this.length; i++){
        result.push(x(this[i])) 
    }
    return result
}

var output = data2.customMap((item)=>item + 20)
console.log(output);