import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddPromoFormComponent } from './add-promo-form/add-promo-form.component';
import { PromoService } from './promo.service';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.css']
})
export class PromoManagementComponent implements OnInit {

  promoes: any[] = [];

  hasil:any[] = [];

  isLoading: boolean = false;

  constructor(private promoService: PromoService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.promoService.getAllPromo().valueChanges.subscribe((resp: any) => {
      this.promoes = resp.data.GetAllPromos;
      // console.log(resp);
      
    })
  }

  openFileDialog(){
    const dialogref = this.dialog.open(AddPromoFormComponent);
    
    dialogref.afterClosed().subscribe((hasil) =>{
      if(!hasil) return;
      
      this.isLoading = true;
      
      const bagian = this.promoService.addPromo(hasil).subscribe((data:any) => {
        this.isLoading = false;

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Good! Your Data Insert',
        });
        bagian.unsubscribe();
        this.promoService.getAllPromo().refetch()
      })
    })
  }
}
