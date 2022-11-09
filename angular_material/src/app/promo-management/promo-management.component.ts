import { Component, OnInit } from '@angular/core';
import { PromoService } from './promo.service';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.css']
})
export class PromoManagementComponent implements OnInit {

  promoes: any[] = [];

  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.promoService.getAllPromo().subscribe((resp: any) => {
      this.promoes = resp.data.GetAllPromos;
      console.log(resp);
      
    })
  }


}
