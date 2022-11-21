import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// API_KEY = 'live_07Lrq6cZiqYsD1hmPpqJC5yinbrmleSizJa40OfqEUrdwnbPfjMM3DvwPenmf474';
constructor(private httpClient: HttpClient) { }

public getData(){
  return this.httpClient.get(`https://api.thedogapi.com/v1/breeds`);
}
}
