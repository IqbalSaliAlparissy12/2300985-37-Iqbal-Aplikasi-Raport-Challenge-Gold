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

  $(".delete-kelas").click(function () {
    // Menyimpan referensi ke tombol "Hapus" yang diklik
    var $deleteButton = $(this);
  
    // Mengambil ID komentar dari atribut id pada tombol "Hapus"
    const kelasId = $deleteButton.attr("id");
  
    // Mengirim permintaan DELETE ke API dengan menggunakan ID komentar
    $.ajax({
        url: "/api/raport/kelas/" + kelasId,
        type: "DELETE",
        success: function (response) {
            // Tindakan setelah berhasil menghapus komentar
            alert("Kelas berhasil di hapus.");
  
            // Hapus elemen komentar dari DOM
            location.reload();
        },
        error: function (error) {
            console.error("Terjadi kesalahan saat menghapus komentar:", error);
            alert("Gagal menghapus komentar.");
        }
    })
  });