var denglu = document.querySelector(".jd-search-denglu");
var home = document.querySelector(".home");
var login = document.querySelector(".login");

denglu.onclick = function(){
    home.style.display = "none";
    login.style.display = "block";
}