import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {


  EndpointRegistration: string = 'https://ticonetgamesserver.onrender.com/api/v1/Users/'


  constructor(private HttpRequest: HttpClient) { }

  PostUser(user: UsersModel): Observable<UsersModel> {

    return this.HttpRequest.post<UsersModel>(this.EndpointRegistration + "CreateUser", user);

  }
}
