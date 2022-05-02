import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersModel} from "../../Interfaces/UsersDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdministrationServiceService {

  EndpointTicoNetGames: string = 'http://localhost:4500/Users/CreateUser'

  constructor(private HttpRequest: HttpClient) { }

  PostUser(user: UsersModel): Observable<UsersModel> {

    return this.HttpRequest.post<UsersModel>(this.EndpointTicoNetGames, user);

  }
}
