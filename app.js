var casesatu = [1, 'data', 3, 'result'];
var hasilcasesatu = '';
var casedua = ['Bejo', 'has', 4, 'sport', 'car'];
var hasilcasedua = '';
function casepertama() {
    for (var i = 0; i < casesatu.length; i++) {
        hasilcasesatu += casesatu[i];
        hasilcasesatu += ' ';
    }
    return hasilcasesatu;
}
console.log(casepertama());
console.log(typeof casepertama());
function casekedua() {
    return (hasilcasedua = casedua.join(' '));
}
console.log(casekedua());
console.log(typeof casekedua());
