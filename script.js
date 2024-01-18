const Menu = document.querySelector(".Menu");
const NavbarList = document.querySelector(".NavbarList");
const closeButton = document.querySelector(".closeButton");
const navbar = document.querySelector(".navbar");
const containerFluid = document.querySelector(".container-fluid");
const navbarToggler = document.querySelector(".navbar-toggler");
const pargasiranLogo = document.querySelector(".pargasiranLogo");
const navbarSupportedContent = document.getElementById("navbarSupportedContent");


Menu.addEventListener("click", () => {
    NavbarList.style.display = "flex";
    Menu.style.display = "none";
    closeButton.style.display = "block";
    containerFluid.style.backgroundColor = "white";
    pargasiranLogo.style.backgroundImage = "url('picture/logo black.svg')";

})
closeButton.addEventListener("click", () => {
    NavbarList.style.display = "none";
    Menu.style.display = "flex";
    closeButton.style.display = "none";
    containerFluid.style.backgroundColor = "";
    pargasiranLogo.style.backgroundImage = "url('picture/logo.svg')";
})


$(document).ready(function () {
    $(".Menu").click(function () {
        $(".navbar").animate({
            fontSize: "21px",
        }, 300);
        $(".closeButton").animate({
            fontSize: "28px"
        }, 300);
        $(".container-fluid").animate({
            opacity: '1',
        }, 300);
    })

    $(".closeButton").click(function () {
        $(".navbar").animate({
            "fontSize": "1px",
        }, 300);
        $(".closeButton").animate({
            "fontSize": "1px"
        }, 300);
        // $(".container-fluid").animate({
        //     opacity: '0',
        // }, 300);
    })
})
// })



const newsCard = document.getElementById("newsCard");
const LatestNews = document.getElementById("LatestNews");
const theEndOfPage = document.querySelector(".theEndOfPage");
const Footer = document.querySelector(".footer");

LatestNews.addEventListener("click", () => {
    newsCard.style.display = "flex";
    theEndOfPage.style.display = "block";
    Footer.style.position = "fixed";
});

