import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { DashboardStatesComponent } from './dashboard-states/dashboard-states.component';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewsInMemoryDataService } from '../news/news-in-memory-data.service';

@NgModule({
  declarations: [DashboardComponent, DashboardStatesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(
      NewsInMemoryDataService, {
        dataEncapsulation: false,
      passThruUnknownUrl: true
    }
    )
  ],
  exports: [
    DashboardComponent,
    RouterModule
  ]
})
export class DashboardModule { }
