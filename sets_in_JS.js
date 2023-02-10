var data = new Set([1,5,7,4,1,2,5,8,9,6,3,3, "hellow", "hey", "hi", true, false, false, "hey", {name : "Akash"}])
// console.log(data) // Set will remove all the duplicate elements in output

data.add("Lalit")  //It will add the elements in set
data.add(25)       // -- / --
data.add(true)     // -- / --


data.delete(true)
data.delete(false)

function getData(){
    console.log(data.size)  //It will show the size of the set
    console.log(data)
}


// data.forEach((item)=>{
    //     console.log(item)
    // })
    // ======
    
    // converting arr to set👇
    var arr = [10,20,40,50,60, "Shubhra",60, 50]
    arr = new Set(arr)
    // console.log(arr)
    
    // Coverting set to arr
    var info = new Set([20,40,10,70,80,90,10,70,40, "Nishant", true])
    info = [...info]
    // console.log(info)
    
    