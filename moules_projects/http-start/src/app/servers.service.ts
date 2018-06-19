import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('https://udemy-ng-http-f00cc.firebaseio.com/data.json', servers, {headers:headers});
    return this.http.put('https://udemy-ng-http-f00cc.firebaseio.com/data.json', servers, { headers: headers })
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getServers() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('https://udemy-ng-http-f00cc.firebaseio.com/data.json').map(
      (response:Response)=>{
        const data=response.json();
        for(let server of data){
          server.name='FETCHED_'+server.name;
        }
        return data;
      }
    ).catch((error:Response)=>{
      console.log(error);
      return Observable.throw('Something went wrong!');
    });
  }
}
