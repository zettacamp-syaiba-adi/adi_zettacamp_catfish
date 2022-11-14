import { Address } from "./adresses.mode"

export interface User{
    id: string,
    name: string,
    nickname: string,
    email: string,
    gender: string,
    addresses: Address
}