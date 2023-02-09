class bankAccount{
    name = "Rakesh Nadal"
    #pin = 3569
    #ifscCode = "SBIN001548"

    getName(){
        return this.name
    }
    getPin(){
        return this.pin
    }
    getSpecialDetails(){
        return{
            name : this.name,
            pin : this.#pin,
            ifscCode : this.#ifscCode
        }
    }
}

function getAllDetails(){
    var details = new bankAccount()
    console.log(details.getSpecialDetails())
}