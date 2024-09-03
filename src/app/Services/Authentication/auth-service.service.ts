import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialModel } from 'src/app/Interfaces/CredentialsDTO.';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  EndpointAuthentication: string = 'https:/ticonetgamesserver.onrender.com/AuthenticationServer'




  constructor(private HttpRequest: HttpClient) { }

  PostCredentials(user: CredentialModel): Observable<CredentialModel> {



    return this.HttpRequest.post<CredentialModel>(this.EndpointAuthentication, user);

  }




}
