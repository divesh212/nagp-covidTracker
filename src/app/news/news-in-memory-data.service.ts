import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { News } from '../interfaces/News';

@Injectable({
  providedIn: 'root'
})
export class NewsInMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const news: News[] = [
      {
        "id": 1,
        "title": "LOCKDOWN 3.0",
        "description": "Lockdown extended by 2 weeks",
        "summary": "The Centre has extended the nationwide lockdown, put into contain the COVID-19 outbreak, by two more weeks.",
        "content": "After a comprehensive review, and in view of the lockdown measures having led to significant gains in the COVID-19 situation in the country, Ministry of Home Affairs (MHA), Government of India (GoI) issued an Order under the Disaster Management Act, 2005, today, to further extend the lockdown for a further period of two weeks beyond May 4, 2020, said a home ministry notification. The extension will however see some relaxations which will be regulated based on the spread of the virus in the districts, identified as red (hotspot), green and orange zones. The green zones are districts with either zero confirmed cases till date; or, no confirmed case in the last 21 days. The classification of districts as red zones will take into account the total number of active cases, doubling rate of confirmed cases, extent of testing and surveillance feedback from the districts. Those districts, which are neither defined as Red nor Green, shall be classified as Orange zones."
      },
      {
        "id": 2,
        "title": "COVID-19 cases in India cross 37,000, death toll at 1,218.",
        "description": "States have recorded 2,293 new cases in the last 24 hours",
        "summary": "Maharashtra continued to remain the most-affected Indian state with a total of 11,506 cases",
        "content": "India’s total tally of confirmed coronavirus cases has crossed the 37,000 mark as states have recorded 2,293 new cases in the last 24 hours. The total number of cases now stand at 37,336 according to the ministry of health and family welfare. In the past 24 hours, the death toll due to Covid-19 has increased by 71. The virus has already claimed 1,218 lives in the country. The Indian government extended the lockdown by another two weeks on Friday. The third phase of the lockdown, according to the Ministry of Home Affairs (MHA), has been extended by two weeks. The second phase will end on 3 May. The order was issued under the Disaster Management Act, 2005. However, the state has provided some relief to districts that aren’t as severely affected by the virus. The green and orange zones have been allowed to resume some non-essential activities."
      }
    ];
    return { news };
  }

  genId(news: News[]): number {
    return news.length > 0 ? Math.max(...news.map(user => user.id)) + 1 : 1;
  }

}
