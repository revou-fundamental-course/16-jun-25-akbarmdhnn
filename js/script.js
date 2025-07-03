// Menunggu semua elemen HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    // Menangani form kontak "Message Us"
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Mencegah halaman refresh saat tombol submit diklik
            event.preventDefault();

            // Mengambil nilai dari setiap input form
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggal-lahir').value;
            const jenisKelaminInput = document.querySelector('input[name="jenis-kelamin"]:checked');
            const pesan = document.getElementById('pesan').value;
            
            // Validasi: pastikan semua field diisi
            if (!nama || !tanggalLahir || !jenisKelaminInput || !pesan) {
                alert('Mohon lengkapi semua field!');
                return;
            }

            const jenisKelamin = jenisKelaminInput.value;

            // Membuat format waktu saat ini
            const now = new Date();
            const currentTime = now.toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });
            
            // Menampilkan nilai ke dalam output box
            document.getElementById('current-time').textContent = currentTime;
            document.getElementById('output-nama').textContent = nama;
            document.getElementById('output-tgl-lahir').textContent = tanggalLahir;
            document.getElementById('output-gender').textContent = jenisKelamin;
            document.getElementById('output-pesan').textContent = pesan;

            // Mengosongkan form setelah submit
            contactForm.reset();
        });
    }

});