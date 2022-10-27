import { Cetak } from "./cetak.model";

export interface Book {
    id: number,
    gmb: string,
    judul: string,
    cetak: Cetak
}