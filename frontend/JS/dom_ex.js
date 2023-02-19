// document.getElementById('para').innerHTML = 'hhh'
let create_element_class = () => {
    let new_el = document.createElement('p')
    new_el.innerText = 'new class para element '
    new_el.setAttribute('class', 'para')

    document.body.append(new_el)
}
let create_element_id = () => {
    let new_el = document.createElement('h1')
    new_el.innerText = 'new h1 id element'
    new_el.setAttribute('id', 'para')

    document.body.append(new_el)
}

let delete_element_class = () => {
    let del_el = document.getElementsByClassName('para')[0]
    if (del_el == null) {
        window.alert('No element to delete')
    }
    else {
        del_el.remove()
    }

}

let delete_element_id = () => {
    let del_el = document.querySelector('#para')
    if (del_el == null) {
        window.alert('No element to delete')
    }
    else {
        del_el.remove()

    }

}

data = [
    {
        fname: 'kavi',
        lname: 'lakshmi',
        age: 1
    },
    {
        fname: 'ravi',
        lname: 'lakshmi',
        age: 10
    },
    {
        fname: 'pavi',
        lname: 'lakshmi',
        age: 11
    },
    {
        fname: 'savi',
        lname: 'lakshmi',
        age: 12
    }
]
// let ul = document.createElement('ul')

// for (let i=0; i < data.length; i++) {
//     // console.log(i)
//     let li = document.createElement('li')
//     li.innerText= data[i].fname + ' ' +data[i].lname + ' - ' + data[i].age
//     ul.appendChild(li)
// }
// document.body.prepend(ul)

let ul1 = document.getElementById('userlist')
// let res =''
for (let i = 0; i < data.length; i++) {
    let newel = document.createElement('li')
    newel.innerText = `${data[i].fname} ${data[i].lname} - ${data[i].age}`
    ul1.appendChild(newel)
    // res += `<li> ${data[i].fname} ${data[i].lname} - ${data[i].age} </li>`
}
// ul1.innerHTML = res