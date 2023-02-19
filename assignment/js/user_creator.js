class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

user_array = []

add_user = (name, age)=>{
    let obj =new User(name, age)
    user_array.push(obj)
    console.log(user_array)
}