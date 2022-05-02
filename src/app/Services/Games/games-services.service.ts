import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { GamesModel } from "../../Interfaces/GamesDTO";

@Injectable({
  providedIn: 'root'
})
export class GamesServicesService {


  TicoNetServer: string = 'http://localhost:4500/Games/'



  constructor(private HttpRequest: HttpClient) { }

  GetGames() {

    return this.HttpRequest.get<GamesModel[]>(this.TicoNetServer + 'GetGames');
  }

  PostGame(game: GamesModel): Observable<GamesModel> {

    //console.log(localStorage.getItem('token'))

    return this.HttpRequest.post<GamesModel>('http://localhost:4500/Games/CreateGame/', game, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),
          

        }
      )
    });

  }

  DeleteGame(_id:string){

    return this.HttpRequest.delete<string>('http://localhost:4500/Games/'+_id, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),
          

        }
      )
    });
  }


}
