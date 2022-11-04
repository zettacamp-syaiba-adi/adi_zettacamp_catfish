import { companys } from "./companys.model"

export interface Mentor {
    _id: string,
    email: string,
    civility: string,
    first_name: string,
    last_name: string,
    company: companys,
    user_status: string,
    count_document: number
}