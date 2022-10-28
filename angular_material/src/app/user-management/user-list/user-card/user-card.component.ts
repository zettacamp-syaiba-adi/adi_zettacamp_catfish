import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService } from '../../user-management.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user:any;
  
  constructor(
    private router: Router,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
  }
  onEditUser() {
    this.router.navigate(['/add'], {
      queryParams: { userId: this.user.id },
    });
  }
}
