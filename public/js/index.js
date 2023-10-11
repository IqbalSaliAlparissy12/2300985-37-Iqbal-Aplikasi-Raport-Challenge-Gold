//default function create submit
$(document).ready(function () {
    $("#create-kelas-form").submit(function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir secara default
  
      // Mengambil data dari formulir
      let kelas = $("#kelas").val();
      let strKelasDetail = $("#strKelasDetail").val();
  
      // Mengirim data ke API menggunakan AJAX
      $.ajax({
        url: "/api/raport/kelas", // Ganti dengan URL API sesuai dengan struktur Anda
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ kelas: kelas, strKelasDetail: strKelasDetail}),
        success: function (response) {
          // Tindakan setelah berhasil
          alert("Kelas berhasil ditambah.");
          // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
          window.location.href = "/kelas";
        },
        error: function (error) {
          // Tindakan jika terjadi kesalahan
          console.error("Terjadi kesalahan: " + JSON.stringify(error));
          alert("Gagal menyimpan Kelas.");
        },
      });
    });
  });