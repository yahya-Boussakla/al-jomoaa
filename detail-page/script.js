let params = new URLSearchParams(location.search);
let id = params.get("id");
let paragraph = document.querySelector(".text-wrap");
let title = document.querySelector("article h1");

let xhr = new XMLHttpRequest();
xhr.open("GET", "../blogs.json", true);
xhr.onload = () => {
  let jsonData = JSON.parse(xhr.responseText);
  paragraph.innerText = jsonData["blogs"][id - 1].blog;
  title.innerText = jsonData["blogs"][id - 1].title;
};
xhr.send();

let searchInput = document.querySelector(".search-bar input");
const searchIcon = document.querySelector(".search-icon");
let asideLinks = document.querySelectorAll("aside li");

document.querySelector(".search-icon").addEventListener("click", (e) => {
  if (searchInput.classList.contains("open")) {
    searchInput.classList.remove("open");
    searchInput.classList.add("closed");
    searchIcon.setSearchIcon();
  } else {
    searchInput.classList.remove("closed");
    searchInput.classList.add("open");
    searchIcon.setCrosseICon();
  }
});

HTMLElement.prototype.setCrosseICon = function () {
  this.classList.remove("fa-magnifying-glass");
  this.classList.add("fa-xmark");
};

HTMLElement.prototype.setSearchIcon = function () {
  this.classList.remove("fa-xmark");
  this.classList.add("fa-magnifying-glass");
};

function search() {
  var result = getPortions();
  paragraph.innerHTML = result.join(" ");
}

for (const link of asideLinks) {
  link.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}

function getPortions() {
  var results = [];
  if (searchInput.value.length > 0) {
    var rgxp = new RegExp("(\\S*)?(" + searchInput.value + ")(\\S*)?", "ig");
    paragraph.innerHTML.replace(rgxp, function (match, $1, $2, $3) {
      results.push(($1 || "") + "<b>" + $2 + "</b>" + ($3 || ""));
    });
  }
  return results;
}