// Klar til fremtidige funktioner, fx klik-tracking
console.log("Gaming-site loaded!");

document.querySelectorAll('nav ul li.dropdown .toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // forhindrer standard link
        this.parentElement.classList.toggle('active');
    });
});