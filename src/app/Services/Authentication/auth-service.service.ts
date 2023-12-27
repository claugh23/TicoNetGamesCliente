import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialModel } from 'src/app/Interfaces/CredentialsDTO.';
import { UsersModel } from 'src/app/Interfaces/UsersDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  EndpointAuthentication: string = 'https://app-a0ef9e3e-13ba-490e-a25d-5691fc931664.cleverapps.io/AuthenticationServer'

  


  constructor(private HttpRequest: HttpClient) { }

  PostCredentials(user: CredentialModel): Observable<CredentialModel> {

   
    
    return this.HttpRequest.post<CredentialModel>(this.EndpointAuthentication, user);

  }

  
 

}
