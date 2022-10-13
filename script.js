let tanyalist;
let total;
let maksdurasi;
let durasitotal;

const lagu = [
    {
        judul: "Hingga Tua Bersama",
        penyanyi: "Rizky Febian",
        genre: "Pop",
        durasipermin: 6
    },
    {
        judul: "Dat Stik",
        penyanyi: "Rich Brian",
        genre: "Rap",
        durasipermin: 4
    },
    {
        judul: "Terlukis Indah",
        penyanyi: "Rizky Febian",
        genre: "Pop",
        durasipermin: 2
    },
    {
        judul: "Bali",
        penyanyi: "Rich Brian",
        genre: "Rap",
        durasipermin: 9
    },
    {
        judul: "Makna Cinta",
        penyanyi: "Rizky Febian",
        genre: "Pop",
        durasipermin: 3
    },
    {
        judul: "Rap Gods",
        penyanyi: "Eminem",
        genre: "Rap",
        durasipermin: 3
    },
    {
        judul: "Tetap Dalam Jiwa",
        penyanyi: "Isyana Sarasvati",
        genre: "Pop",
        durasipermin: 3
    },
    {
        judul: "Venom",
        penyanyi: "Eminem",
        genre: "Rap",
        durasipermin: 4
    },
    {
        judul: "Angan-Anganmu",
        penyanyi: "Isyana Sarasvati",
        genre: "Pop",
        durasipermin: 2
    },
    {
        judul: "Terima Kasih Cinta",
        penyanyi: "Afgan",
        genre: "Pop",
        durasipermin: 3
    },
];



// function genrelist(){
//     tanyalist = prompt("Pilih Genre Musikmu : (Pop, Rock, R&B, Hip-Hop");
//     let jenislist = lagu.filter(function(lagu){
//         return lagu.genre == "Pop";
//     });
//     console.log(jenislist);
// }
function genrelist(){
    let jenislist = [];
    tanyalist = prompt("Pilih Genre Musikmu : (Pop, Rap)");
    if(tanyalist == "Pop"){
        jenislist = lagu.filter(function(lagu){
            return lagu.genre == "Pop";
        });
        console.log(jenislist);
    }else if(tanyalist == "Rap"){
        jenislist = lagu.filter(function(lagu){
            return lagu.genre == "Rap";
        });
        console.log(jenislist);
    }else{
            console.log("Pilihan Anda Kosong atau Gagal")
        }
    }

function artistlist(){
    let tanyaartis = prompt("Pilih Artis favoritmu : ");
    let artist = lagu.filter(({penyanyi}) => penyanyi === tanyaartis);
    console.log(artist);
    // if(tanyaartis == "Rich Brian"){
    //     artistlist = lagu.filter(function(lagu){
    //         return lagu.penyanyi == "Rich Brian";
    //     });
    //     console.log(artistlist);
    // }else if(tanyaartis == "Eminem"){
    //     artistlist = lagu.filter(function(lagu){
    //         return lagu.penyanyi == "Eminem";
    //     });
    //     console.log(artistlist);
    // }else if(tanyaartis == "Isyana Sarasvati"){
    //     artistlist = lagu.penyanyi(function(lagu){
    //         return lagu.penyanyi == "Isyana Sarasvati";
    //     });
    //     console.log(artistlist);
    // }else if(tanyaartis == "Rizky Febian"){
    //     artistlist = lagu.penyanyi(function(lagu){
    //         return lagu.penyanyi == "Rizky Febian";
    //     });
    //     console.log(artistlist);
    // }else if(tanyaartis == "Afgan"){
    //     artistlist = lagu.penyanyi(function(lagu){
    //         return lagu.penyanyi == "Afgan";
    //     });
    //     console.log(artistlist);
    // }else{
    //     console.log("Pencarianmu tidak ditemukan");
    // }
}

let lagubaru = [];
function durasi(){
    let total = 0;
    let durasitotal = 0;
    maksdurasi = prompt("Berapa lama durasi kamu ingin mendengarkan lagu");
    for(const i of lagu){
        total += i.durasipermin;
        if(total < maksdurasi){
            lagubaru.push(i);
        }else{
            break;
        }
        durasitotal = total;
    }
    console.log(lagubaru);
    console.log(durasitotal);
}

function main(){
    tanyalist = prompt("Pilih angka untuk melanjutkan layanan (1. Artis 2. Genre 3. Durasi)");
    while(tanyalist !=1 || tanyalist != 2 || tanyalist !=3){
        if(tanyalist == 1){
            artistlist();
            break;
        }else if(tanyalist == 2){
            genrelist();
            break;
        }else if(tanyalist == 3){
            durasi();
            break;
        }else{
            alert("Pilihanmu tidak ada yang masuk.");
            tanyalist = prompt("Pilih angka untuk melanjutkan layanan (1. Artis 2. Genre 3. Durasi)");
        }
    }
}

main();