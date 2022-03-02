import { User } from './../common/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private API_URL = environment.apiurl;
  
  constructor(private http: HttpClient) { }

  addUserToRemote(user: User) {
    return this.http.post(this.API_URL + '/usertest',user, { responseType: 'text' });
  }

  getUsersFromRemote() {
    return this.http.get(this.API_URL + '/usertest', { responseType: 'text' });
  }

  getUserFromRemote(id: number) {
    return this.http.get(this.API_URL + '/usertest/'+id, { responseType: 'text' });
  }

  deleteUserFromRemote(id: number) {
    return this.http.delete(this.API_URL + '/usertest/'+id, { responseType: 'text' });
  }
}
