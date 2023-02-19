class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getDate(){
        return new Date();
    }
    setDate(){
        this.date = new Date();
    }

    setSurname(surname){
        this.surname = surname;
    }
}


class Address extends User{
    constructor(name, age, address){
        super(name, age);
        this.address = address;
    }
}

let addObj1 = new Address('Sam', 8, 'Chennai');
let addObj2 = new Address('Ram', 7, 'Madurai');
let addObj3 = new Address('Mani', 81, 'Erode');

console.log(addObj1);
console.log(addObj2);
console.log(addObj3);

let user1 = new User('nnn', 88);
console.log(user1);
user1.setSurname('ssdd');
console.log(user1);
