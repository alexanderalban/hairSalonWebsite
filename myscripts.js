const whereami = () => {
    document.getElementById("currentnav").style.color = rgb(11,163,156);
}

const hamburgerclick = () => {
    element=document.getElementById("hamburger-button")
    if (document.getElementById("hamburger-button").src = "BarberImages/mobile-menu.png))
    {

        document.getElementById("hamburger-button").src = "BarberImages/mobile-close.png";
    }
    else
    {
        document.getElementById("hamburger-button").src = "BarberImages/mobile-menu.png";
    }