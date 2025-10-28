document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
    const iconElement = document.getElementById('icone-modo');
    const headerElement = document.querySelector('header');


    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';
    iconElement.innerHTML = 'dark_mode'


    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
            headerElement.classList.add('bg-dark');
            headerElement.classList.remove('bg-light');
            iconElement.innerHTML = 'dark_mode';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
            headerElement.classList.add('bg-light');
            headerElement.classList.remove('bg-dark');
            iconElement.innerHTML = 'light_mode';
        }
    });
});



// Menu toggle para dispositivos móveis
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');

    // Troca o ícone entre menu e close
    const icon = menuToggle.querySelector('.material-symbols-outlined');
    icon.textContent = menu.classList.contains('show') ? 'close' : 'menu';
});






//Identificar o sistema operacional

function detectOS() {
    const userAgent = navigator.userAgent;

    return (/Android|iPhone|iPad|iPod|Windows/.test(userAgent)) ? "api" : "web";
}


// Enviar mensagem por whatsapp
function sendWhatsAppMessage() {
    const phoneNumber = "5567991609897";
    const app = detectOS();
    var message = `👋Olá! Gostei desse projeto de site da Doguinho's. Como faço para ter um site semelhante?`;

    var whatsapp = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsapp, '_blank');
}