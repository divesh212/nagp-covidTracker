import { Statewise } from './Statewise';

export interface CovidData {
    cases_time_series: any[];
    statewise: Statewise[];
    tested: any[];
}