import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  EndpointRegistration: string = 'https://app-a0ef9e3e-13ba-490e-a25d-5691fc931664.cleverapps.io/Users/CreateUser'

  constructor(private HttpRequest: HttpClient) { }

  PostUser(user: UsersModel): Observable<UsersModel> {

    return this.HttpRequest.post<UsersModel>(this.EndpointRegistration, user);

  }
}
