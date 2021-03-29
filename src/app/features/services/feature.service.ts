import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

  getFeaturedQueList() {
    return this.http.get(`${environment.serverUrl}questions/featured?key=${environment.apiKey}&site=stackoverflow&order=desc&sort=activity&filter=default`)
  }

  getUserInfo(uId) {
    return this.http.get(`${environment.serverUrl}users/${uId}?key=${environment.apiKey}&site=stackoverflow&order=desc&sort=reputation&filter=default`)
  }

  getTopTagsofUser(uId) {
    return this.http.get(`${environment.serverUrl}users/${uId}/top-tags?key=${environment.apiKey}&site=stackoverflow&order=desc&sort=reputation&filter=default`)
  }

  getQueonUser(uId) {
    return this.http.get(`${environment.serverUrl}users/${uId}/questions?key=${environment.apiKey}&site=stackoverflow&order=desc&sort=activity&filter=default`)
  }
}
