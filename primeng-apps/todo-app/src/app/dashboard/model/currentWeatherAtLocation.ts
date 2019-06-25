import { Weather } from './weather';
import { Main }    from './main';
import { Wind }    from './wind';

export interface CurrentWeatherAtLocation {
  weather: Weather[];
  main: Main;
  wind: Wind;
  visibility: number;
}
