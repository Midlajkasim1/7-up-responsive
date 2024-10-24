const logo = document.getElementById("logo");

const navbar = document.querySelector(".navbar");

logo.addEventListener("click", colorchange);

function colorchange(){
    navbar.style.backgroundColor="green";
}