alert(`Game Tebak Angka`);

// names user
let names = prompt('Masukan nama ente');

let ulang = true;
while (ulang) {
    for (var i = 3; i >= 1; i--){
        // user memilih
        let userChoice = parseInt(prompt(`Selamat Datang, ${names}.\nPilihlah angka dari 1 - 10\n\nKesempatan tinggal ${i}x.)`));
        
        // menentukan rules dari si komputer
        var computer = Math.floor(Math.random() * 10) + 1;
        
        let hasil;
        if (userChoice == computer) {
            hasil = 'Tebakan anda Benar!';
            alert(`anda memilih angka : ${userChoice}\nkomputer memilih : ${computer}\nMaka hasilnya : ${hasil}`);
            ulang = confirm('Mau coba lagi ?');
            if (!ulang){
                break;
            } else {
                i = 4;
            }
        } else if (userChoice < computer) {
            hasil = 'Tebakan anda terlalu rendah!';
            alert(`${hasil}`);
        } else if (userChoice > computer) {
            hasil = 'Tebakan anda terlalu tinggi!';
            alert(`${hasil}`);
        } else {
            if (isNaN(userChoice)){ // jika si user memasukan yang tidak sesuai/tidak diisi
                alert(`Harap masukan angka dari 1 - 10`);
            }
        }

        if (i <= 1){
            alert(`Kesempatan anda sudah habis..\n\nTebakan yang benar adalah : ${computer}`)
            ulang = confirm('mau coba lagi ?');
        }
    }
}
alert(`Terimakasih ${names} sudah bermain..`);