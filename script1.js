let ulang = true;

while (ulang){
    // menangkap pilihan player
    var player = prompt('masukan pilihan : gajah, semut, orang');
    // menangkap pilihat computer
    // membangkitkan bilangan random
    var comp = Math.random() * 10;

    if (comp <= 3){
        comp = 'gajah';
    } else if (comp > 3 && comp < 7){
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // menentukan rules
    var hasil = '';
    if (player == comp){
        hasil = 'seri';
    } else if (player == 'gajah'){
        // if (comp == 'orang'){
        //     hasil = 'menang';
        // } else {
        //     hasil = 'kalah'
        // }
        hasil = (comp == 'orang') ? 'menang' : 'kalah'
    } else if (player == 'semut'){
        hasil = (comp == 'gajah') ? 'menang' : 'kalah';
    } else if (player == 'orang'){
        hasil = (comp == 'semut') ? 'menang' : 'kalah'
    } else {
        hasil = `memasukan pilihan yang salah`;
    }

    // menampilkan hasilnya
    alert(`kamu memilih : ${player}\ncomputer memilih : ${comp}\nMaka hasilnya kamu : ${hasil}`)

    // persetujuan
    ulang = confirm('coba lagi ?');
}
alert('terima kasih sudah bermain..')

