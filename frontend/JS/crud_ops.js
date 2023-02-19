var data = []

class User {
    constructor(name, age, gender){
        this.id = data.length + 1
        this.name = name;
        this.age = age;
        this.yob = new Date().getFullYear() - this.age;
        this.gender = gender.toUpperCase()
    }
}

let createUser = (namex, age, gender) => {
    let user = new User(namex, age, gender)
    data.push(user)
    return {status:200, user:user.id, msg:'User created successfully'}

}

let readUsers = ()=>{
    return data.map((el)=>{
        let fullgender = 'Transgender';
        if (el.gender == 'M') {
            fullgender = 'Male';
        }
        else if (el.gender == 'F'){
            fullgender = 'Female';
        }
        let usr = {...el}
        usr.gender = fullgender
        return usr
    })
    
}

let updateUser = (idx,...values) => {
    let userid = data.findIndex((el) => el.id === idx)
    if (userid != -1) {
        data[userid].name = values[0]
        data[userid].age = values[1]
        data[userid].gender = values[2].toUpperCase()
        data[userid].yob = new Date().getFullYear() - data[userid].age;
        return { status: 200,user: idx, msg: 'User updated successfully' }
    }
    else {
        return { status: 404, msg: 'User not exist' }
    }

}

let deleteUser = (idx) => {
    pre = data.length
    data = data.filter((el)=> el.id != idx)
    if (pre == data.length+1){
        return { status: 200, user: idx, msg: 'User deleted successfully' }
    }
    else {
        return { status: 404, msg: 'User not exist' }
    }
    
}