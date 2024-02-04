let xhr = new XMLHttpRequest();
let id = "";
xhr.open("GET", "blogs.json", true);
xhr.onload = () => {
    let article = document.querySelector("article");
    let jsonData = JSON.parse(xhr.responseText);
    jsonData['blogs'].forEach(blog => {
        id = blog.id;
        let section = document.createElement("section");
        let category = document.createElement("div");
        let title = document.createElement("h1");
        let hr = document.createElement("hr");
        let p = document.createElement("p");
        let button = document.createElement("button");
        button.setAttribute("onclick", "header()");
        button.innerText = "اقرأ المزيد";
        p.innerText = blog.blog;
        category.innerText = blog.category;
        title.innerText = blog.title;
        section.appendChild(category);
        section.appendChild(hr);
        section.appendChild(title);
        section.appendChild(p);
        section.appendChild(button);
        article.appendChild(section);
    });
}
xhr.send();

// search bar functionality
let searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-icon');
let asideLinks = document.querySelectorAll("aside li");

document.querySelector('.search-icon').addEventListener('click', e=>{
    if (searchInput.classList.contains('open')){
        searchInput.classList.remove('open');
        searchInput.classList.add('closed');
        searchIcon.setSearchIcon();
    }else{
        searchInput.classList.remove('closed');
        searchInput.classList.add('open');
        searchIcon.setCrosseICon();
    }
});

HTMLElement.prototype.setCrosseICon = function () {
    this.classList.remove('fa-magnifying-glass');
    this.classList.add('fa-xmark');
}

HTMLElement.prototype.setSearchIcon = function () {
    this.classList.remove('fa-xmark');
    this.classList.add('fa-magnifying-glass');
}

function header() {
    window.location.href = "detail-page/index.html?id="+id.toString();
}
function search() {
    let blogsTitles = document.querySelectorAll("section h1");
    for (const title of blogsTitles) {
        if (title.innerText.includes(searchInput.value)) {
            title.parentElement.style.display="flex";
        }
        else{
            title.parentElement.style.display="none";
        }
    }
}
for (const link of asideLinks) {
    link.addEventListener("click" , () =>{
        let categoryse = document.querySelectorAll("section div");
        for (const x of categoryse) {
            if (!(link.innerText === x.innerText)) {
                x.parentElement.style.display="none";
            }
            else{
                x.parentElement.style.display="flex";
            }
        }
    });
}