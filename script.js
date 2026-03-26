const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');
const icon = menuBtn.querySelector('i');

// Toggle do Menu Mobile e troca de ícone
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Altera o ícone de hambúrguer para X
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link e voltar o ícone ao normal
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
