function bookPurchase() {
    let input;
    let stok = 10;
    const disc = 10 / 100;
    let priceBook = 50000;
    let total;
    const tax = 10 / 100;
    input = prompt('Masukan Jumlah Buku: '+stok+'');
        for (input; input <= stok; input) {
            if (stok > 0 && input <= stok) {
                total = priceBook * input;
                total = total - total * disc;
                total = total + total * tax;
                console.log('Kamu membeli '+total+'Buku');
                console.log('Total Harga : '+total+'');
                stok = stok - input;
                input = prompt('Masukan Jumlah Buku:' +stok+'');
            } else if (stok > 0 && input > stok) {
                console.log('Stok Habis');
                console.log(stok+' Buku habis');
            } else {
                console.log('stok is running out');
                break;
            }
        }
}

bookPurchase();