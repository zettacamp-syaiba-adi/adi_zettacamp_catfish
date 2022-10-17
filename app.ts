const kalimat = 'Learning Typescript is different than Javascript'

function ts(kalimat:string, awal:number, akhir:number): string {
    return kalimat.slice(awal, akhir);
}

console.log(ts(kalimat,9,19));