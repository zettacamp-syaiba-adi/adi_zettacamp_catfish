let calculateTax = function(event) {
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let Jumlah = document.getElementById('qty').value;
    let price = document.getElementById('price').value;
    let diskon = document.getElementById('disk').value;
    let semua = Jumlah * price;
    let potongan = (semua*(diskon/100));
    const tax = 0.1;
    document.getElementById("total").value = semua + potongan - ((semua + potongan)*tax);
}
let form = document.getElementById('purchase');
form.addEventListener('submit', calculateTax, false);

function details(){
    let detail = confirm("Apakah Anda Mau Melihat Detail Transaksi?");
    if(detail == true){
        alert("Anda membeli Buku "+document.getElementById('nama').value+" Dengan harga "+document.getElementById("price").value+" . Buku yang anda beli sebanyak "+document.getElementById('qty').value+". Anda mendapatkan diskon 10% .Sehingga Total anda belanjan adalah Rp. "+document.getElementById("total").value);
    }else{
        alert("Terima Kasih sudah berbelaja");
    }
}