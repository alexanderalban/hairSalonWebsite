var navbar = document.querySelector(".hamburger-menu")
var ham = document.querySelector(".hamburger-button")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("hamburger-close")
}


// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)