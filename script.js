
// search bar functionality
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-icon');
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