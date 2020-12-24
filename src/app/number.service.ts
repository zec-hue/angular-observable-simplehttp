import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Numbers } from './numberobject';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  //https://zhtestrigdummytwo.azurewebsites.net/api/RandomNumber?code=2rbHa6j5lUEVu/4anJXQUHH/6SAsrJMnGkLwbJCzi4GU6qS8ZQyNvQ==
  numberBaseUrl:string = 'https://zhtestrigdummytwo.azurewebsites.net/api/RandomNumber?code=2rbHa6j5lUEVu/4anJXQUHH/6SAsrJMnGkLwbJCzi4GU6qS8ZQyNvQ==';

  constructor(private httpClient : HttpClient) { }

  get_numbers(){

    const httpHeaders: HttpHeaders = new HttpHeaders({
      ContentType: 'application/json'
    });

    return this.httpClient.get<Numbers[]>(this.numberBaseUrl, { headers : httpHeaders });
  }
}
