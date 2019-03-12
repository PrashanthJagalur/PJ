import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get<User[]>(`{environment.apiUrl}/users`);
}

getById(id: number) {
    return this.http.get(`{environment.apiUrl}/users` + id);
}

register(user: User) {
    return this.http.post(`{environment.apiUrl}/users/register`, user);
}

/*update(user: User) {
    return this.http.put(`{envirnoments.apiUrl}/users/` + user, user);
}*/

delete(id: number) {
    return this.http.delete(`{environment.apiUrl}/users` + id);
}

//...................................forgot password................................................//
/*getById(id: number) {
    return this.http.get(`{environment.apiUrl}/users` + id);
}*/

}