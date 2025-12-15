# Panduan HTML untuk Pemula

## Cara Membuat HTML dari Awal

### 1. Persiapan

- Buka text editor (VS Code recommended)
- Buat folder project baru
- Buat file `index.html`

### 2. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Judul Halaman</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Ini adalah paragraf pertama saya</p>
  </body>
</html>
```

### 3. Tag HTML Penting

- `<h1>` sampai `<h6>` = Heading
- `<p>` = Paragraf
- `<a href="">` = Link
- `<img src="">` = Gambar
- `<ul><li>` = List tidak berurut
- `<ol><li>` = List berurut
- `<div>` = Container

## Install & Jalankan Live Server

### Install Live Server Extension

1. Buka VS Code
2. Tekan `Ctrl + Shift + X` (Windows) atau `Cmd + Shift + X` (Mac)
3. Cari "Live Server"
4. Install extension dari Ritwick Dey

### Menjalankan Live Server

1. Buka file `index.html` di VS Code
2. Klik kanan pada file
3. Pilih **"Open with Live Server"**
4. Browser akan otomatis terbuka di `http://127.0.0.1:5500`

### Stop Live Server

- Klik "Port: 5500" di status bar VS Code
- Atau tutup tab browser

## Tips untuk Pemula

- Simpan file dengan ekstensi `.html`
- Selalu tutup tag yang dibuka
- Gunakan indentasi yang rapi
- Live Server akan auto-reload saat ada perubahan
