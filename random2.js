let ulang = true;

while (ulang) {
    // user memilih
    let user = parseInt(prompt('Tebak angka dari 1 - 10'));

    // menentukan pilihan computer
    let computer = Math.floor(Math.random() * 10) + 1;

    // lalu kita akan menentukan rules/jalan dari si computer nya
    // mennggunakan pengkondisian
    let hasil;
    if (user == computer){
        hasil = 'Tebakan kamu Benar!';
        alert(`Kamu memilih : ${user}\nComputer memilih : ${computer}\nHasilnya : ${hasil}`);
    } else if (user < computer){
        hasil = 'Tebakan kamu terlalu Rendah!';
        alert(`${hasil}`);
    } else if (user > computer){
        hasil = 'Tebakan kamu terlalu tinggi!';
        alert(`${hasil}`);
    } else {
        if(isNaN(user)){
            alert(`pilihan tidak sesuai!, tolong masukan angka dari 1 - 10`);
        }
    }

    // kondisi ketika ingin coba lagi
    ulang = confirm('mau coba lagi ?');
}
alert('terima kasih sudah bermain..');
