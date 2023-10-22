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
      data: JSON.stringify({ kelas: kelas, strKelasDetail: strKelasDetail }),
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
    },
  });
});



// Menangani klik tombol "Edit"
$(".edit-kelas").click(function () {
  const selectedKelasId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/kelas/edit/${selectedKelasId}`;
  
});

// EDIT Kelas
$("#edit-kelas-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let kelas = $("#kelas").val();
  let strKelasDetail = $("#strKelasDetail").val();

  let id = $("#kelasId").val()

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: `/api/raport/kelas/${id}`, // Gunakan selectedKelasId
    type: "PUT", // Menggunakan metode PUT untuk pengeditan
    contentType: "application/json",
    data: JSON.stringify({ kelas: kelas, strKelasDetail: strKelasDetail }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Kelas berhasil diedit.");
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

$("#registration-form").submit(function (event) {
  event.preventDefault();

  const name = $("#name").val();
  const email = $("#email").val();
  const role = $("#strRole").val();
  const password = $("#password").val();
  const repassword = $("#repassword").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai");
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/raport/users/admin", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        strName: name,
        strEmail: email,
        strPassword: password,
        strRole: role,
      }),
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

$("#registration-wali-form").submit(function (event) {
  event.preventDefault();

  const name = $("#name").val();
  const email = $("#email").val();
  const role = $("#strRole").val();
  const kelas = $("#strKelas").val();
  const password = $("#password").val();
  const repassword = $("#repassword").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai");
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/raport/users/wali", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        strName: name,
        strEmail: email,
        strPassword: password,
        strRole: role,
        strKelas: kelas
      }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman login
        alert("Wali Kelas berhasil! Silakan masuk.");
        window.location.href = "/users/wali";
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal mendaftar. Silakan coba lagi.");
      },
    });
  }
});



//Create Mapel
$(document).ready(function () {
  $("#create-mapel-form").submit(function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data dari formulir
    let kelas = $("#strKelas").val();
    let strMataPelajaran = $("#strMataPelajaran").val();

    // Mengirim data ke API menggunakan AJAX
    $.ajax({
      url: "/api-mapel/raport/mapel", // Ganti dengan URL API sesuai dengan struktur Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ strKelas: kelas, strMataPelajaran: strMataPelajaran }),
      success: function (response) {
        // Tindakan setelah berhasil
        alert("Mata Pelajaran berhasil ditambah.");
        // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
        window.location.href = "/mapel";
      },
      error: function (error) {
        // Tindakan jika terjadi kesalahan
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal menyimpan mata pelajaran.");
      },
    });
  });
});

$(".delete-mapel").click(function () {
  // Menyimpan referensi ke tombol "Hapus" yang diklik
  var $deleteButton = $(this);

  // Mengambil ID komentar dari atribut id pada tombol "Hapus"
  const mapelId = $deleteButton.attr("id");

  // Mengirim permintaan DELETE ke API dengan menggunakan ID komentar
  $.ajax({
    url: "/api-mapel/raport/mapel/" + mapelId,
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil menghapus komentar
      alert("Mata pelajaran berhasil di hapus.");

      // Hapus elemen komentar dari DOM
      location.reload();
    },
    error: function (error) {
      console.error("Terjadi kesalahan saat menghapus mata pelajaran:", error);
      alert("Gagal menghapus mata pelajaran.");
    },
  });
});

// Menangani klik tombol "Edit"
$(".edit-mapel").click(function () {
 const  selectedMapelId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/mapel/edit/${selectedMapelId}`;
  
});

// EDIT Mata Pelajaran
$("#edit-mapel-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let mataPelajaran = $("#strMataPelajaran").val();
  let kelas = $("#strKelas").val();

  let id = $("#mapelId").val()

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: `/api-mapel/raport/mapel/${id}`, // Gunakan selectedKelasId
    type: "PUT", // Menggunakan metode PUT untuk pengeditan
    contentType: "application/json",
    data: JSON.stringify({ strMataPelajaran: mataPelajaran, strKelas: kelas }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Mata pelajaran berhasil diedit.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/mapel";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan mata pelajaran.");
    },
  });
});


$(".delete-wali").click(function () {
  // Menyimpan referensi ke tombol "Hapus" yang diklik
  var $deleteButton = $(this);

  // Mengambil ID komentar dari atribut id pada tombol "Hapus"
  const waliId = $deleteButton.attr("id");

  // Mengirim permintaan DELETE ke API dengan menggunakan ID komentar
  $.ajax({
    url: "/api/raport/users/wali/" + waliIdId,
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil menghapus komentar
      alert("Wali kelas berhasil di hapus.");

      // Hapus elemen komentar dari DOM
      location.reload();
    },
    error: function (error) {
      console.error("Terjadi kesalahan saat menghapus wali kelas:", error);
      alert("Gagal menghapus wali kelas.");
    },
  });
});
