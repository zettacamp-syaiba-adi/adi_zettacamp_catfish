import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private apollo: Apollo) { }

  getSchool(): Observable<any>{
    return this.apollo.query({
      query: gql`
      query{
        GetAllSchools(pagination: {page:0, limit:20}){
         short_name,
         long_name,
         status
       }
      }
      `
    })

  }
}

