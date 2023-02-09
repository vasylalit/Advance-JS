function* simpleGenerator(){
    let i = 0
    while(true){
        i++;
        yield i
    }
}

var sG = simpleGenerator()

function getNewId(){
    document.getElementById('newId').innerText = sG.next().value
}


