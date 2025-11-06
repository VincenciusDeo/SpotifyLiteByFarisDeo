// Menyimpan daftar lagu dalam array
let daftarLagu = [];

// Fungsi untuk menambah lagu
function tambahLagu() {
    const input = document.getElementById("inputLagu");
    const judul = input.value.trim();

    if (judul !== "") {
        daftarLagu.push(judul);
        input.value = "";
        tampilkanLagu();
    } else {
        alert("Masukkan judul lagu terlebih dahulu!");
    }
}

// Fungsi untuk menampilkan lagu-lagu di daftar
function tampilkanLagu() {
    const list = document.getElementById("listLagu");
    list.innerHTML = "";

    for (let lagu of daftarLagu) {
        const li = document.createElement("li");
        li.innerText = lagu;

        // Tombol hapus untuk setiap lagu
        const btnHapus = document.createElement("button");
        btnHapus.innerText = "Hapus";
        btnHapus.className = "hapus";
        btnHapus.onclick = () => {
            const index = daftarLagu.indexOf(lagu);
                if (index !== -1) {
                daftarLagu.splice(index, 1); // Hapus hanya satu elemen
                tampilkanLagu(); // Perbarui daftar
            }
        };

        li.appendChild(btnHapus);
        list.appendChild(li);
    }
}
