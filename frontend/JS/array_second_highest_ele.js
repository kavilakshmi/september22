data = [{
    fname: 'Sam',
    lname: 'Sam',
    age: 17
}, {
    fname: 'Ram',
    lname: 'Raj',
    age: 70
}, {
    fname: 'Vikki',
    lname: 'charan',
    age: 50
}, {
    fname: 'Arun',
    lname: 'raj',
    age: 18
}, {
    fname: 'rahul',
    lname: 'ram',
    age: 5
}];
let childs = [];
let adults = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].age < 18) {
        childs[childs.length] = data[i];
    }
    else {
        adults[adults.length] = data[i];
    }
}

function pretty_print(array, type) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].fname + ' ' + array[i].lname + "'s " + type + " Age: " + array[i].age);
    }
}

pretty_print(childs, 'Child');
pretty_print(adults, 'Adult');


// # second largest Number


let list_numbers = [1, 2, 3, 11, 22, 33, 5, 9, 6, 2344, 553, 24, 35663, 453];
let second = 0;
let first = 0;
function find_second_largest_num(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] > second) {
            if (array[i] > first) {
                second = first
                first = array[i]
            }
            else {
                second = array[i]
            }
        }

    }

    return second
}

console.log(find_second_largest_num(list_numbers))
