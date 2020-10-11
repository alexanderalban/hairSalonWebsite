
// Hamburger Button functionality


let toggleHamburger = () => {
    console.log("Hello there");

    const hamburgermenu = document.getElementById("hamburger-menu");
    if (hamburgermenu.style.display == "none") {
    hamburgermenu.style.display = "grid";
    } else {hamburgermenu.style.display = "none";
        
    }  
    


}