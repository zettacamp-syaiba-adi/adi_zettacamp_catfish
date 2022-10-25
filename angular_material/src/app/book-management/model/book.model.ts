import { Cetak } from "./cetak.model";

export interface Book {
    _id: string,
    gmb: string,
    judul: string,
    cetak: Cetak
}