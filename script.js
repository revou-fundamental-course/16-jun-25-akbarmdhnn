// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    // Fungsi untuk ucapan selamat datang
    function setWelcomeName() {
        const welcomeSpan = document.getElementById('welcome-name');
        if (welcomeSpan) {
            // Meminta nama pengguna menggunakan prompt
            const userName = prompt("Please enter your name:", "Guest");
            // Mengubah teks sapaan dengan nama yang dimasukkan
            if (userName) {
                welcomeSpan.textContent = userName;
            }
        }
    }

    // Panggil fungsi ucapan selamat datang
    setWelcomeName();

    // Mengambil elemen formulir dan output
    const contactForm = document.getElementById('contact-form');
    const formOutput = document.getElementById('form-output');

    if (contactForm) {
        // Menambahkan event listener untuk event 'submit'
        contactForm.addEventListener('submit', function(event) {
            // Mencegah formulir dikirim secara default (yang akan me-refresh halaman)
            event.preventDefault();

            // Mengambil nilai dari setiap input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Validasi sederhana: memastikan semua field diisi
            if (!name || !email || !phone || !message) {
                alert('All fields are required!');
                return; // Menghentikan eksekusi jika ada field yang kosong
            }

            // Menampilkan hasil input di dalam elemen 'form-output'
            formOutput.innerHTML = `
                <h3>Submission Received:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

            // Mengosongkan formulir setelah berhasil dikirim
            contactForm.reset();
        });
    }
});