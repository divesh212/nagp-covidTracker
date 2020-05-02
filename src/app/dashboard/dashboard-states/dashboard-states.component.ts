import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/interfaces/State';
import { DashboardService } from '../dashboard.service';
import { District } from 'src/app/interfaces/District';
import { DistrictData } from 'src/app/interfaces/DistrictData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-states',
  templateUrl: './dashboard-states.component.html',
  styleUrls: ['./dashboard-states.component.scss']
})
export class DashboardStatesComponent implements OnInit {

  stateList: State[] = [];
  statecode: String;
  currentState: State;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dashboardService.fetchStateWiseData().subscribe((data) => {
      for (var statename in data) {
        let district: District[] = [];
        var code = data[statename].statecode;
        for (var districtname in data[statename].districtData) {
          let districtdata = data[statename].districtData[districtname] as DistrictData;
          district.push({ name: districtname, data: districtdata });
        }

        this.stateList.push({ districtData: district, statecode: code });
      }

      this.currentState = this.getStateFromCode(this.statecode);
    })

    this.route.paramMap.subscribe(params => {
      this.statecode = params.get("statecode");
    })

    this.currentState = this.getStateFromCode(this.statecode);
  }

  getStateFromCode(statecode: String): State {
    return this.stateList.find(state => state.statecode === statecode);
  }

}
