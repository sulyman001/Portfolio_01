const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector('.scroll-top');


if(scrollButton){
    window.addEventListener('scroll', function(){
        if(pageYOffset > (window.innerHeight * 1)){
            scrollButton.style.display = 'flex';
        }else{
            scrollButton.style.display = 'none'
        }
    });
    scrollButton.addEventListener('click', function(){
        window.scrollTo(0, 0)
    })
}

hamburgerMenu.addEventListener('click', function(){
    // This line is for the menu to come up when clicked.
    navContent.classList.add('show');
    // This line is for the page not to scroll when the menu is clicked.
    document.body.style.overflow="hidden";
})
closeNavButton.addEventListener('click', function(){
    // To close the menu
    navContent.classList.remove('show');
    // To return the page back to normal when the menu is closed
    document.body.style.overflow="initial";
})
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navContent.classList.remove('show');
        document.body.style.overflow="initial";
    })
})