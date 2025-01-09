
let lastScrollTop = 0;
const header = document.getElementById("myHeader");

window.addEventListener("scroll", function() {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-100%"; // Adjust the value as needed
} else {
    // Scrolling up
    header.style.top = "0";
}
lastScrollTop = scrollTop;
});



//faqs
const faq = document.querySelector('.qwes');
const icon = document.querySelector('.qwes ion-icon');
faq.addEventListener('click', ()=>{
    faq.classList.toggle('active');
    icon.classList.toggle('active');
})

//nav show on breakpoint
const menu = document.getElementById('menu');
const navs = document.querySelector('.navs');
menu.addEventListener('click',()=>{
    navs.classList.toggle('active');
})

//window.onscroll
window.onscroll=()=>{
    navs.classList.remove('active');
}