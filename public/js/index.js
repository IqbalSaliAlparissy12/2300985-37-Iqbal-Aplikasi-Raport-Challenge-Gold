//Create Kelas
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

  $("#registration-form").submit(function (event) {
    event.preventDefault();
  
    const name = $("#name").val();
    const email = $("#email").val();
    const role = $("#strRole").val()
    const password = $("#password").val();
    const repassword = $("#repassword").val();
  
    if (password !== repassword) {
      alert("Maaf konfirmasi password yang and masukan tidak sesuai")
    } else {
      // Kirim data registrasi ke server menggunakan AJAX atau fetch
      $.ajax({
        url: "/api/raport/users/register", // Ganti dengan rute API registrasi Anda
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ strName: name, strEmail: email, strPassword: password, strRole: role }),
        success: function (response) {
          // Tampilkan pesan sukses atau redirect ke halaman login
          alert("Registrasi berhasil! Silakan masuk.");
          window.location.href = "/login";
        },
        error: function (error) {
          console.error("Terjadi kesalahan: " + JSON.stringify(error));
          alert("Gagal mendaftar. Silakan coba lagi.");
        },
      });
    }
  });

  $(document).ready(function () {
    $("#login-form").submit(function (event) {
      event.preventDefault();
  
      const email = $("#email").val();
      const password = $("#password").val();
  
      console.log(email);
      // Kirim data login ke server menggunakan AJAX atau fetch
      $.ajax({
        url: "/login", // Ganti dengan rute API login Anda
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ strEmail: email, strPassword: password }),
        success: function (response) {
         console.log(response);
          // Tampilkan pesan sukses atau redirect ke halaman utama
          alert("Login berhasil!");
          window.location.href = "/home"; // Redirect ke halaman utama jika diperlukan
        },
        error: function (error) {
          console.error("Terjadi kesalahan: " + JSON.stringify(error));
          alert("Gagal login. Periksa kembali email dan password Anda.");
        },
      });
    });
  });