const aboutUs = document.getElementById("about-button");
const startPage = document.querySelector('.start-page');
const dD = document.documentElement;
setTimeout(() => {
    startPage.classList.add('hide');
}, 4000);
document.addEventListener('mousemove', (e) => {
    if(e.clientX > dD.clientWidth - 150) {
        aboutUs.style.right = '-85px'
    }
    else {
        aboutUs.style.right = '-200px'
    }
    if(e.clientY > dD.clientHeight - 100) {
        aboutUs.style.top = "760px";
    }
    else if (e.clientY < 100){
        aboutUs.style.top = '0';
    }
    else {
        aboutUs.style.top = `${e.clientY - 175/2}px`;
    }
    setTimeout(() => {
        aboutUs.style.right = '-90px'
    }, 500);
})

const main = document.querySelector(".main");
const aboutPage = document.querySelector(".about-page");
const menuOpen = document.querySelector(".menu-button");
const menu = document.querySelector('.menu');
const menuClose = document.querySelector(".close-menu");

menuOpen.addEventListener('click', () => {
    menu.classList.remove('hide');
    setTimeout(() => {
        main.classList.add('blur');
    }, 1000);
})

menuClose.addEventListener('click', ()=>{
    main.classList.remove('blur');
    menu.classList.add('close-menu');
    menuClose.classList.add('close-button');
    setTimeout(() => {
        menu.classList.add('hide');
        menu.classList.remove('close-menu');
        menuClose.classList.remove('close-button');
    }, 1000);
})
const pageUp = () => {
    aboutPage.classList.remove('page-disappears');
    aboutPage.classList.add("page-disappears");
    setTimeout(() => {
        aboutPage.classList.add("hide");
    }, 700);
    setTimeout(() => {
        main.classList.remove("hide");
        main.classList.add("page-appears")
    }, 800);
    setTimeout(() => {
        aboutPage.classList.remove("page-disappears");
        main.classList.remove("page-appears")
    }, 1600);
}
const pageDown = () => {
    aboutUs.style.top = "-200px";
    main.classList.add("page-disappears");
    setTimeout(() => {
        main.classList.add("hide");
    }, 700);
    setTimeout(() => {
        aboutPage.classList.remove("hide");
        aboutPage.classList.add("page-appears")
    }, 800);
    setTimeout(() => {
        main.classList.remove("page-disappears");
        aboutPage.classList.remove("page-appears")
    }, 1600);
}
let currentPage = 0;
const wheelPage = (e) => {
    if(e.deltaY === 100 && currentPage === 0) {
        pageDown();
        currentPage--;
        
    }
    else if(e.deltaY === -100 && currentPage === -1) {
        pageUp();
        currentPage++;
    }
    else {
        return;
    }
}
document.addEventListener('wheel', (e) => wheelPage(e));
    
