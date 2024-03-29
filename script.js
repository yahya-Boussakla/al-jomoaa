let xhr = new XMLHttpRequest();
let linksBar = document.getElementById("links");
let exist = false;
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
        button.innerText = "اقرأ المزيد";
        p.innerText = blog.blog;
        category.innerText = blog.category;
        title.innerText = blog.title;
        button.addEventListener("click" , () =>{
            window.location.href="detail-page/index.html?id="+blog.id.toString();
        });
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

function search() {
    let blogsTitles = document.querySelectorAll("section h1");
    for (let i = 0; i<blogsTitles.length; i++) {
        if (blogsTitles[i].innerText.includes(searchInput.value)) {
            blogsTitles[i].parentElement.style.display="flex";
        }
        else{
            blogsTitles[i].parentElement.style.display="none";
        }
    }
    if (i<asideLinks.length) {
        asideLinks[i]
    }
}
for (const link of asideLinks) {
  
    link.addEventListener("click" , () =>{
        let categoryse = document.querySelectorAll("section div");
        for (const test of asideLinks) {
            test.classList.remove("asidLink");
        }
        link.classList.add("asidLink");
        
        for (const element of categoryse) {
            if (!(link.innerText === element.innerText)) {
                element.parentElement.style.display="none";
            }
            else{
                element.parentElement.style.display="flex";
            }
        }
        if (exist == false) {
            let roundedPill = document.createElement("span");
            roundedPill.classList.add("rounded-pill");
            roundedPill.setAttribute("id", "added-pill")
            roundedPill.innerText = link.innerHTML;
            linksBar.appendChild(roundedPill);
        }
        else{
            document.getElementById("added-pill").innerText = link.innerText;
        }
        exist = true;
    });
}