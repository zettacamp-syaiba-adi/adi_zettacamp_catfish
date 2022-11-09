import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private apollo: Apollo) { }
  getUser(): Observable<any>{
    return this.apollo.query({
      query: gql`
      query{
        GetAllUsers(pagination: {page:0, limit: 15}){
         first_name
         last_name
         civility
       }
     }
      `
    })
  }
  
  getUserFilter(name: string){
    const QUERY = `query Users($last_name: String) {
      GetAllUsers(
        last_name: $last_name,
        pagination: {page: 0, limit: 15}
      ){
        first_name
        last_name
        civility
      }
    }`
    return this.apollo.query({
      query:gql(QUERY),
      variables:{last_name: name}
    })
  }

}
