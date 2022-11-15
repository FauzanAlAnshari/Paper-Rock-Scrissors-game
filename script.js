//Membuat pilihan komputer
function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

//Membuat aturan suit
function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'semut') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
}

//Membuat gambar pilihan komputer random
function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', './' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100)
}





// //Membuat Aktif Pilihan Tombol
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     console.log('hasil : ' + hasil);

// //Mengganti gambar komputer
// const imgComputer = document.querySelector('.img-computer');
// imgComputer.setAttribute('src', './' + pilihanComputer + '.png');

// //Memberi teks hasil
// const info = document.querySelector('.info');
// info.innerHTML = hasil;
// });

//codingan yang lebih ringkas
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {

    //Membuat Aktif Pilihan Tombol
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        console.log('hasil : ' + hasil);

        putar();

        //setTimeout untuk menunda hasil agar sama dengan random gambar

        setTimeout(function () {
            //Mengganti gambar komputer
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', './' + pilihanComputer + '.png');

            //Memberi teks hasil
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });

});