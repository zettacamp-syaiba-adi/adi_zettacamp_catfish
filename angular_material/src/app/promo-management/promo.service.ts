import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

const MUTATE_QUERY =  `
mutation AddPromoNih(
  $ref: String!,
  $title: String!,
  $sub_title: String!,
  $description: String!,
  $image_url: String!
  ) {
    CreatePromo(promo_input:{
      ref:$ref
      title:$title
      sub_title: $sub_title
      description: $description
      image_url: $image_url
    }){
      _id,
      title,
      sub_title,
      image_url
      ref,
      description
    }
}`

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private apollo: Apollo) { }


  getAllPromo(){
    return this.apollo.watchQuery({
      query: gql`
      query{
        GetAllPromos(pagination: {limit: 500, page:0}){
           _id,
           title,
           sub_title,
           image_url
           ref,
           description
         }
       }
      `
    })
  }

  // addPromo(ref: string, title: string, sub_title: string, description: string, image_url: string){
    
  //   return this.apollo.query({
  //     query:gql(MUTATE_QUERY),
  //     variables:{
  //       ref: ref,
  //       title: title,
  //       sub_title: sub_title,
  //       description: description,
  //       image_url:image_url
  //     }
  //   })
  // }

  addPromo(data: any){
    return this.apollo.mutate({
      mutation: gql(MUTATE_QUERY),
      variables: data
    })
  }

  // addPromo(){
  //   this.apollo.mutate({
  //     mutation:MUTATE_QUERY,
  //     variables:{
  //       inputType:{
  //         ref: String



  //       }
  //     }
  //   })
  // }
}
