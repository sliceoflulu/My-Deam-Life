// Fungsi untuk memutar dan menghentikan Backsound Musik
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");
    const icon = btn.querySelector("i");

    if (music.paused) {
        music.play();
        btn.classList.add("playing");
        icon.classList.remove("fa-music");
        icon.classList.add("fa-pause"); // Mengubah ikon jadi pause
    } else {
        music.pause();
        btn.classList.remove("playing");
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-music"); // Mengubah ikon kembali ke musik
    }
}

// Animasi Fade-In Otomatis saat di-scroll (Intersection Observer)
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1 // Elemen terpicu jika 10% sudah muncul di layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.8s ease-out";
                observer.unobserve(entry.target); // Cukup animasi sekali saja
            }
        });
    }, observerOptions);

    // Menerapkan efek scroll fade-in pada section tertentu
    const targetSections = document.querySelectorAll('.about-grid, .dream-card, .gallery-item, .quote-item');
    targetSections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        observer.observe(section);
    });
});