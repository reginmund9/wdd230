
const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
    
});


