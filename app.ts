let casesatu: Array<string | number> = [1, 'data', 3, 'result'];
let hasilcasesatu:string = '';

let casedua: Array<string | number> = ['Bejo', 'has', 4, 'sport', 'car'];
let hasilcasedua:string = '';

function casepertama(): string{
    for(let i:number = 0 ; i < casesatu.length; i++){
        hasilcasesatu += casesatu[i];
        hasilcasesatu += ' ';
    }
    return hasilcasesatu;
}
console.log(casepertama());
console.log(typeof casepertama());

function casekedua():string {
    return (hasilcasedua = casedua.join(' '));
}
console.log(casekedua());
console.log(typeof casekedua());

