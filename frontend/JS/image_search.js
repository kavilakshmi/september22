let data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    }]

let container_images = document.getElementById('image_container');
let modal = document.getElementById('exampleModalCenter');
let submit = document.getElementById('isearch');
container_images.addEventListener("click", removeImages);
modal.addEventListener("click", updateValue);

let current_id = null;

displayImages =()=>{
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = data[i]['url']
        let title = document.createElement('p')
        title.innerHTML = data[i]['title']
        let deleteButton = document.createElement("button");

        deleteButton.className =
            "btn-danger btn btn-sm float-right align-items-end delete";

        deleteButton.appendChild(document.createTextNode("Delete"));
        let editButton = document.createElement("button");

        editButton.className =
            "btn-success btn btn-sm float-right align-items-end edit";

        editButton.setAttribute('data-toggle', 'modal')
        editButton.setAttribute('data-target', '#exampleModalCenter')
        editButton.addEventListener('click', getCurrentID)
        editButton.appendChild(document.createTextNode("Edit"));

        div.className = 'item-img mt-36 card col-lg-3 col-md-4 col-sm-4'
        div.setAttribute('id', data[i]['id'])
        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(editButton)
        div.appendChild(deleteButton)

        container_images.append(div)
    }

}
function removeImages(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        let div = e.target.parentNode;
        container_images.removeChild(div);
    }

}

function updateValue(e) {
    if (e.target.classList.contains("save")) {
        new_title = document.getElementById('new_title');
        document.getElementById(current_id).childNodes[1].innerHTML = new_title.value;
        new_title.value = null;
        $('#exampleModalCenter').modal('hide');
    }
}

function getCurrentID(e) {
    current_id = e.target.parentNode.getAttribute('id');

}

function searchImages(){
    let string_value = document.getElementById('isearch');
    filter = string_value.value.toUpperCase();
    let images = document.getElementById('image_container');
    for (let i = 0; i < images.length; i++) {
        p = images[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "hide";
        }
    }
}