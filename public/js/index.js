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

  let id = $("#kelasId").val();

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
        strKelas: kelas,
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
      data: JSON.stringify({
        strKelas: kelas,
        strMataPelajaran: strMataPelajaran,
      }),
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
  const selectedMapelId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/mapel/edit/${selectedMapelId}`;
});

// EDIT Mata Pelajaran
$("#edit-mapel-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let mataPelajaran = $("#strMataPelajaran").val();
  let kelas = $("#strKelas").val();

  let id = $("#mapelId").val();

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
    url: "/api/raport/users/wali/" + waliId,
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

//Create Identitas Sekolah
$(document).ready(function () {
  $("#create-identitas-form").submit(function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data dari formulir
    let strNamaSekolah = $("#strNamaSekolah").val();
    let strNIS = $("#strNIS").val();
    let strAlamat = $("#strAlamat").val();
    let strKodePos = $("#strKodePos").val();
    let strTelpon = $("#strTelpon").val();
    let strKelurahan = $("#strKelurahan").val();
    let strKecamatan = $("#strKecamatan").val();
    let strKabupaten = $("#strKabupaten").val();
    let strProvinsi = $("#strProvinsi").val();
    let strWebsite = $("#strWebsite").val();
    let strEmail = $("#strEmail").val();

    // Mengirim data ke API menggunakan AJAX
    $.ajax({
      url: "/api-identitas/raport/identitas", // Ganti dengan URL API sesuai dengan struktur Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        strNamaSekolah: strNamaSekolah,
        strNIS: strNIS,
        strAlamat: strAlamat,
        strKodePos: strKodePos,
        strTelpon: strTelpon,
        strKelurahan: strKelurahan,
        strKecamatan: strKecamatan,
        strKabupaten: strKabupaten,
        strProvinsi: strProvinsi,
        strWebsite: strWebsite,
        strEmail: strEmail,
      }),
      success: function (response) {
        // Tindakan setelah berhasil
        alert("Identitas sekolah berhasil ditambah.");
        // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
        window.location.href = "/identitas";
      },
      error: function (error) {
        // Tindakan jika terjadi kesalahan
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal menyimpan identitas.");
      },
    });
  });
});

// Menangani klik tombol "Edit"
$(".edit-identitas").click(function () {
  const selectedIdentitasId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/identitas/edit/${selectedIdentitasId}`;
});

// EDIT Identitas
$("#edit-identitas-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let namaSekolah = $("#strNamaSekolah").val();
  let NIS = $("#strNIS").val();
  let Alamat = $("#strAlamat").val();
  let KodePost = $("#strKodePos").val();
  let telpon = $("#strTelpon").val();
  let kelurahan = $("#strKelurahan").val();
  let kecamatan = $("#strKecamatan").val();
  let kabupaten = $("#strKabupaten").val();
  let provinsi = $("#strProvinsi").val();
  let website = $("#strWebsite").val();
  let email = $("#strEmail").val();

  let id = $("#identitasId").val();

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: `/api-identitas/raport/identitas/${id}`, // Gunakan selectedKelasId
    type: "PUT", // Menggunakan metode PUT untuk pengeditan
    contentType: "application/json",
    data: JSON.stringify({
      strNamaSekolah: namaSekolah,
      strAlamat: Alamat,
      strNIS: NIS,
      strKodePos: KodePost,
      strTelpon: telpon,
      strKelurahan: kelurahan,
      strKecamatan: kecamatan,
      strKabupaten: kabupaten,
      strProvinsi: provinsi,
      strWebsite: website,
      strEmail: email
    }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Identitas sekolah berhasil diedit.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/identitas";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan identitas.");
    },
  });
});

$(".delete-identitas").click(function () {
  // Menyimpan referensi ke tombol "Hapus" yang diklik
  var $deleteButton = $(this);

  // Mengambil ID komentar dari atribut id pada tombol "Hapus"
  const identitasId = $deleteButton.attr("id");

  // Mengirim permintaan DELETE ke API dengan menggunakan ID komentar
  $.ajax({
    url: "/api-identitas/raport/identitas/" + identitasId,
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil menghapus komentar
      alert("Identitas berhasil di hapus.");

      // Hapus elemen komentar dari DOM
      location.reload();
    },
    error: function (error) {
      console.error("Terjadi kesalahan saat menghapus identitas:", error);
      alert("Gagal menghapus identitas.");
    },
  });
});


//Create Kelas
$(document).ready(function () {
  $("#create-absensi-form").submit(function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data dari formulir
    let strNamaSiswa = $("#strNamaSiswa").val();
    let intSakit = $("#intSakit").val();
    let intIzin = $("#intIzin").val();
    let intAlpa = $("#intAlpa").val();
    let strKelas = $("#strKelas").val();


    // Mengirim data ke API menggunakan AJAX
    $.ajax({
      url: "/api-absensi/raport/absensi", // Ganti dengan URL API sesuai dengan struktur Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ strNamaSiswa: strNamaSiswa, intSakit: intSakit, intIzin: intIzin, intAlpa: intAlpa, strKelas:strKelas }),
      success: function (response) {
        // Tindakan setelah berhasil
        alert("Absensi berhasil ditambah.");
        // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
        window.location.href = "/absensi";
      },
      error: function (error) {
        // Tindakan jika terjadi kesalahan
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal menyimpan absensi.");
      },
    });
  });
});

$(".delete-absensi").click(function () {
  // Menyimpan referensi ke tombol "Hapus" yang diklik
  var $deleteButton = $(this);

  // Mengambil ID komentar dari atribut id pada tombol "Hapus"
  const absensiId = $deleteButton.attr("id");

  // Mengirim permintaan DELETE ke API dengan menggunakan ID komentar
  $.ajax({
    url: "/api-absensi/raport/absensi/" + absensiId,
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil menghapus komentar
      alert("Absensi berhasil di hapus.");

      // Hapus elemen komentar dari DOM
      location.reload();
    },
    error: function (error) {
      console.error("Terjadi kesalahan saat menghapus absensi:", error);
      alert("Gagal menghapus absensi.");
    },
  });
});

// Menangani klik tombol "Edit"
$(".edit-absensi").click(function () {
  const selectedAbsensiId = $(this).attr("id");
  // Redirect ke halaman edit dengan membawa ID kelas
  window.location.href = `/absensi/edit/${selectedAbsensiId}`;
});

// EDIT Identitas
$("#edit-absensi-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  let strNamaSiswa = $("#strNamaSiswa").val();
  let strKelas = $("#strKelas").val();
  let intSakit = $("#intSakit").val();
  let intIzin = $("#intIzin").val();
  let intAlpa = $("#intAlpa").val();


  let id = $("#absensiId").val();

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: `/api-absensi/raport/absensi/${id}`, // Gunakan selectedKelasId
    type: "PUT", // Menggunakan metode PUT untuk pengeditan
    contentType: "application/json",
    data: JSON.stringify({
        strNamaSiswa :strNamaSiswa,
        strKelas :strKelas,
        intSakit: intSakit,
        intIzin: intIzin,
        intAlpa : intAlpa
    }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Absen siswa berhasil diedit.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/absensi";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan absensi.");
    },
  });
});
