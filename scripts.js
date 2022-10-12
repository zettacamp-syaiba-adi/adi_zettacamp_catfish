// let uang;
// let cicilan;
// let tempo;
// let input;
// let total;
// let bulan;
// //let credirpermount = [];
// function bookPurchase() {
//     let input = 0;
//     let stok = 10;
//     const disc = 10 / 100;
//     let priceBook = 50000;
//     let total = 0;
//     const tax = 10 / 100;
//     tempo = 0;
//     let credirpermount = [];
//     let cek = confirm("Apakah Anda akan membeli buku?");
//     input = prompt('Masukan Jumlah Buku: '+stok);
//     // bulan = prompt("Masukan Berapa Bulan Tempo");
//     if(cek == true){
//         if(0<input<=10){
//             for(input; input <= stok; input-1){
//                 total = priceBook * input;
//                 total = total - total * disc;
//                 total = total + total * tax;
//                 console.log('Kamu membeli '+input+' Buku');
//                 console.log('Total Harga : '+total+'');
//                 stok = stok - input;
//                 bulan = prompt("Masukan Berapa Bulan Tempo");
//                 tempo = bulan-1;
//                 console.log("Cicilan Kamu "+bulan+" Bulan");
//                 cicilan = total / bulan;
//                 console.log("Cicilan Kamu "+cicilan+" Bulan");
//                 for(let i = 0; i<=tempo; i++){
//                     credirpermount.push({Bulan: `${i + 1} Bulan`, harga : `${cicilan}`});
//                 }
//                 console.log(credirpermount);
//                 input = prompt('Masukan Jumlah Buku: '+stok);
//             if(input >= stok && stok == 0){
//                 console.log("Pembelianmu tidak mencukupi karena sisa " +stok);

//             }else{ 
//                 console.log("Pesanan Melebihi Stok");
//             }
//             }
//         }else{
//             console.log("Terima Kasih");
//         }
//     }
// }


// bookPurchase();



// for(input; input <= stok; input){
//     if(input <= stok){
//         total = priceBook * input;
//         total = total - total * disc;
//         total = total + total * tax;
//         console.log('Kamu membeli '+input+' Buku');
//         console.log('Total Harga : '+total+'');
//         stok = stok - input;
//         bulan = prompt("Masukan Berapa Bulan Tempo");
//         tempo = bulan-1;
//         console.log("Cicilan Kamu "+tempo+" Bulan");
//         cicilan = total / bulan;
//         console.log("Cicilan Kamu "+cicilan+" Bulan");
//         for(let i = 0; i<=tempo; i++){
//             credirpermount.push({Bulan: `${i+1} Bulan`, harga : `${cicilan}`});
//         }
//         console.log(credirpermount);
//         input = prompt('Masukan Jumlah Buku: '+stok);
//         if(input >= stok && stok == 0){
//             console.log("Pembelianmu tidak mencukupi karena sisa " +stok);
//         }
//     }else{
//         console.log("Kamu melebihi stok");
//     }
// }

// for(input; input <= stok; input){
//         total = priceBook * input;
//         total = total - total * disc;
//         total = total + total * tax;
//         console.log('Kamu membeli '+input+' Buku');
//         console.log('Total Harga : '+total+'');
//         stok = stok - input;
//         bulan = prompt("Masukan Berapa Bulan Tempo");
//         tempo = bulan-1;
//         console.log("Cicilan Kamu "+tempo+" Bulan");
//         cicilan = total / bulan;
//         console.log("Cicilan Kamu "+cicilan+" Bulan");
//         for(let i = 0; i<=tempo; i++){
//             credirpermount.push({Bulan: `${i+1} Bulan`, harga : `${cicilan}`});
//         }
//         console.log(credirpermount);
//         input = prompt('Masukan Jumlah Buku: '+stok);
//         if(input >= stok && stok == 0){
//             console.log("Pembelianmu tidak mencukupi karena sisa " +stok);


let input;
let konfirmasi;
let price;
let total;
let diskon = 10/100;
const tax = 11/100;
let perbulan;
let cicilan;
let credirpermount = [];
let a,b, rest;

let belumbayar = [1,2,3,4,5,6,7,8]

function tanya(){
    konfirmasi = confirm("Apakah Anda Ingin Membeli Buku");
    if(konfirmasi == true){
        bookPurchase();
    }else{
        alert("Oke Terima Kasih telah mampir");
    }
}

function reset(){
    credirpermount = [];
}
function bookPurchase(){
    let input;
    let stok = 10;
    const disc = 10 / 100;
    let priceBook = 50000;
    let total = 0;
    const tax = 10 / 100;
    perbulan = 0;
    input = prompt(`Masukan Jumlah Buku: ${stok}`);
    if(input <= stok){
        for(input ; input <= stok ; input){
            total = priceBook * input;
                total = total - total * disc;
                total = total + total * tax;
                console.log('Kamu membeli '+input+' Buku');
                console.log('Total Harga : '+total+'');
                bulan = prompt("Masukan Berapa Bulan Tempo");
                tempo = bulan-1;
                console.log("Cicilan Kamu "+bulan+" Bulan");
                cicilan = total / bulan;
                console.log("Cicilan Kamu "+cicilan+" Bulan");
                for(let i = 0; i<=tempo; i++){
                     credirpermount.push({Bulan: `Bulan ke ${i + 1} `, harga : `${cicilan}`});
                }
                console.log(credirpermount);
                stok = stok - input;
                console.log('Sisa '+stok);
                input = prompt('Masukan Jumlah Buku: '+stok);
                reset();
                if (stok <= input){
                    console.log("Kamu beli melebihi stok");
                }

        }
    }else{
        console.log("Gagal");
    }
    [a, b, ...rest] = ["Januari", "Februari", "Maret", "April"];

    console.log(rest);
}

tanya();

