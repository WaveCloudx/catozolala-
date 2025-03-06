// Mendapatkan elemen-elemen dari HTML
const captureButton = document.getElementById("capture");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const context = canvas.getContext("2d");

// Fungsi untuk mengakses kamera dan mengambil gambar
function captureImage() {
    // Meminta izin untuk mengakses media perangkat (kamera)
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            // Membuat elemen video untuk mengakses stream kamera
            const video = document.createElement("video");
            video.srcObject = stream;
            video.play();

            // Tunggu video mulai dan dapatkan ukuran video
            video.onloadedmetadata = () => {
                // Set ukuran canvas sesuai dengan ukuran video
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // Ambil gambar dari video dan tampilkan di canvas
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                // Menampilkan gambar di elemen img
                const dataUrl = canvas.toDataURL();
                photo.src = dataUrl;

                // Setelah gambar diambil, hentikan stream kamera
                stream.getTracks().forEach(track => track.stop());
            };
        })
        .catch((error) => {
            console.error("Gagal mengakses kamera:", error);
            alert("Izin kamera diperlukan untuk melanjutkan.");
        });
}

// Menjalankan fungsi captureImage saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    captureButton.addEventListener("click", captureImage);
});