document.addEventListener('DOMContentLoaded', function() {

    const visitorNameSpan = document.getElementById('visitor-name');
    if (visitorNameSpan) {
        const name = prompt("Silakan masukkan nama Anda:", "Nama Anda");
        if (name) {
            visitorNameSpan.textContent = name;
        }
    }
    
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-links a.nav-button');

    function highlightNav() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 70) { 
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    highlightNav();
    window.addEventListener('scroll', highlightNav);

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggal-lahir').value;
            const jenisKelaminInput = document.querySelector('input[name="jenis-kelamin"]:checked');
            const pesan = document.getElementById('pesan').value;
            
            if (!nama || !tanggalLahir || !jenisKelaminInput || !pesan) {
                alert('Mohon lengkapi semua field!');
                return;
            }

            const jenisKelamin = jenisKelaminInput.value;
            const now = new Date();
            const currentTime = now.toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });
            
            document.getElementById('current-time').textContent = currentTime;
            document.getElementById('output-nama').textContent = nama;
            document.getElementById('output-tgl-lahir').textContent = tanggalLahir;
            document.getElementById('output-gender').textContent = jenisKelamin;
            document.getElementById('output-pesan').textContent = pesan;

            contactForm.reset();
        });
    }
});