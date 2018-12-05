$(document).ready(function () {
    $('.hamburg-menu').click(function () {
        $('.hamburg-menu').toggleClass('active');
    })
});
$(document).ready(function () {
    $('.hamburg-menu').click(function () {
        $('#menu').toggleClass('open');
    })
});
window.onscroll = function () {
    myFunction()
};
//header fixed
var header = document.getElementById("navigation");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$(document).ready(function () {
    $('.client__slider').slick({
        dots: true,
        accessibility: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoPlay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
});