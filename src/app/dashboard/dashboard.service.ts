import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../interfaces/CovidData';
import { Statewise } from '../interfaces/Statewise';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url: string = "https://api.covid19india.org/data.json";
  statewise_url = "https://api.covid19india.org/state_district_wise.json";

  constructor(private http: HttpClient) { }

  fetchCovidData() {
    return this.http.get<CovidData>(this.url);
  }

  fetchStateWiseData() {
    return this.http.get<any>(this.statewise_url);
  }
}
