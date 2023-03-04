//Scaling transition for navbar link elements
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}


//Mobile Navbar Functionality
function mobileNav() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//About Me Slideshow
var myIndex = 0;
var video = document.getElementById("video");
var drawing = document.getElementById("drawing");
var printing = document.getElementById("printing");
var photography = document.getElementById("photography");
var leather = document.getElementById("leather");
var design = document.getElementById("design");

function aboutMeSlideshow() {
    let slideshow = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slideshow.length) {
        myIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideshow[myIndex - 1].style.display = "block";
    dots[myIndex-1].className += " active";
    if (slideshow[myIndex - 1].getAttribute('value') == "video") {
        console.log("1")
        video.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].getAttribute('value') != "video") {
        video.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Drawing") {
        console.log("2")
        drawing.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].alt != "Drawing") {
        drawing.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "3D Printing & Painting") {
        console.log("3")
        printing.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].alt != "3D Printing & Painting") {
        printing.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Photography") {
        console.log("4")
        photography.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].alt != "Photography") {
        photography.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Sewwing & Leathercraft") {
        console.log("5")
        leather.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].alt != "Sewwing & Leathercraft") {
        leather.style.cssText = "";
    }
    if (slideshow[myIndex - 1].alt == "Graphic Design") {
        console.log("6")
        design.style.cssText = "font-weight: 500;";
    }
    if (slideshow[myIndex - 1].alt != "Graphic Design") {
        design.style.cssText = "";
    }
    setTimeout(aboutMeSlideshow, 5000); // Change image every 2 seconds
}

aboutMeSlideshow();

//Parallax headers, iterates through a list of 5
document.getElementById("body").onscroll = function parallaxBackground() {  
    for(var i=1; i<7; i++) {
        var target = document.getElementById("parallax" + i);
        var scrolltotop = document.scrollingElement.scrollTop;
        var xvalue = "center";
        var factor = .7;
        var yvalue = scrolltotop * factor;
        target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    }
  }