// Klar til fremtidige funktioner, fx klik-tracking
console.log("Gaming-site loaded!");

document.querySelectorAll('nav ul li.dropdown .toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // forhindrer standard link
        this.parentElement.classList.toggle('active');
    });
});

const topButton = document.getElementById("top_button");

// Vis knappen når man scroller mere end 200px ned
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";
    } else {
        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";
    }
});