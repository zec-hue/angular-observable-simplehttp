import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Human } from './humanobject';
import { Job } from './jobsobject';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobBaseUrl:string = "http://jobs.github.com/positions.json?description=c#&location=sydney";
  humanBaseUrl:string = "https://zhtestrigdummy.azurewebsites.net/api/RandomName?code=tz1mDBCgMN18iCSC7naUylPn5xxTVI3TNTbKjhhjEUZa4QVP1Z8rog==";

  constructor(private httpClient : HttpClient) { }

  get_jobs(){

    const httpHeaders: HttpHeaders = new HttpHeaders({
      ContentType: 'application/json'
    });

    return this.httpClient.get<Job[]>(this.jobBaseUrl, { headers : httpHeaders });
  }

  get_humans(){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      ContentType: 'application/json'
    });

    return this.httpClient.get<Human[]>(this.humanBaseUrl, { headers : httpHeaders });
  }
}
