const wbm = require("wbm")

// wbm.start().then(async()=>{
//     const phones = ['919921307558', '918378899574']
//     const message = "Hey there.."
//     await wbm.send(phones, message)
//     await wbm.end()
// }).catch(err=> console.log(err))

// =======

// wbm.start().then(async()=>{
//     const contacts = [
//         {phone : '919921307558', name : "Lalit", age : 24},
//         {phone : '918378899574', name : "Umesh", age : 25}
//     ]
//     const message = `Hi {{name}}, your age is {{age}}`
//     await wbm.send(contacts, message)
//     await wbm.end()
// }).catch(err=>console.log(err))

// =======

wbm.start().then(async()=>{
    const contacts = [
        {phone : '919921307558', name : "Lalit", group : "friend"},
        {phone : '918378899574', name : "Mr. Umesh Khule", group : "customer"}
    ]
    for(contact of contacts){
        let message = "hi"
        if (contact.group === "customer"){
            message = "Good evening" + " " + contact.name
        }
        else if(contact.group === "friend"){
            message = "Hey" + " " + contact.name + ". whats up.."
        }
        await wbm.sendTo(contact.phone, message)
    }
    await wbm.end()
}).catch(err=>console.log(err))