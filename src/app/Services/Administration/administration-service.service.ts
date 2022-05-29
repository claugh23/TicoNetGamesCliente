import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsersModel } from "../../Interfaces/UsersDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdministrationServiceService {

  TicoNetServer: string = 'https://tico-net-games-server.herokuapp.com/Users/'

  constructor(private HttpRequest: HttpClient) { }
  GetUsers() {

    return this.HttpRequest.get<UsersModel[]>(this.TicoNetServer);
  }

  PostUser(user: UsersModel): Observable<UsersModel> {

    //console.log(localStorage.getItem('token'))

    return this.HttpRequest.post<UsersModel>(this.TicoNetServer+'CreateUser', user, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  PutUser(update: UsersModel): Observable<UsersModel> {

    return this.HttpRequest.put<any>(this.TicoNetServer+'UpdateUser', update, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  DeleteUser(id: Number) {

    return this.HttpRequest.delete<String>(this.TicoNetServer+'DeleteUser/' + id, {
      headers: new HttpHeaders(
        {

          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });
  }

}
