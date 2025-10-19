import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService, User1 } from '../../services/dashboard-service';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements OnInit {
  users: User1[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
      this.dashboardService.getUsers().subscribe(data => {
        debugger;
          this.users = data;
      });
  }
}