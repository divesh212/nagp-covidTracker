import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardStatesComponent } from './dashboard/dashboard-states/dashboard-states.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'dashboard/:statecode', component: DashboardStatesComponent },
  { path: 'news/add', component: AddNewsComponent },
  { path: '**', component: PageNotfoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule
  ],
  exports: [
    RouterModule,
    LoginModule,
    DashboardModule
  ]
})
export class AppRoutingModule { }
