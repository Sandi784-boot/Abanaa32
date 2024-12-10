
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 3000); 
}

for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('fade');
}


const fixedIcon = document.getElementById('fixedIcon');


fixedIcon.addEventListener('mouseenter', () => {
    socialIcons.classList.add('show');
});


fixedIcon.addEventListener('mouseleave', () => {
    socialIcons.classList.remove('show');
});
fixedIcon.addEventListener('mouseenter', () => {
    socialIcons.classList.add('show'); 
    setTimeout(() => {
        socialIcons.style.opacity = 1; 
    }, 0); 
});
