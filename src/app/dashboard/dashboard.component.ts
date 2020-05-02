import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Statewise } from '../interfaces/Statewise';
import { State } from '../interfaces/State';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  covidDataList: Statewise[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.fetchCovidData().subscribe((data) => {
      this.covidDataList = data.statewise;
    })
  }

}
