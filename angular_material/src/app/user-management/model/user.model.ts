import { Addresses } from "./addresses.model"

export interface User {
    id:string,
    name:string,
    age:number,
    gender:string,
    email:string,
    position:string,
    status:string,
    addresses: Addresses
}