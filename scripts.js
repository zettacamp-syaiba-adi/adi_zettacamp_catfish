function bookPurchase() {
    let input;
    let stok = 10;
    const disc = 10 / 100;
    let priceBook = 50000;
    let total;
    const tax = 10 / 100;
    let cek = confirm("Apakah Anda akan membeli buku?");
    input = prompt('Masukan Jumlah Buku: '+stok);
    if(input<=10){
        for(input; input <= stok; input-1){
            if(input <= stok){
                total = priceBook * input;
                total = total - total * disc;
                total = total + total * tax;
                console.log('Kamu membeli '+input+' Buku');
                console.log('Total Harga : '+total+'');
                stok = stok - input;
                input = prompt('Masukan Jumlah Buku: '+stok);
                if(input > stok){
                    console.log("Habis Bro")
                }
            }else{
                console.log("Kamu melebihi stok");
            }
        }
    }else{ 
        console.log("Pesanan Melebihi Stok");
    }
}




bookPurchase();