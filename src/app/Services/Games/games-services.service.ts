import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { GamesModel } from "../../Interfaces/GamesDTO";

@Injectable({
  providedIn: 'root'
})
export class GamesServicesService {



  TicoNetServer: string = 'https://ticonetgamesserver.onrender.com/api/v1/Games/'


  constructor(private HttpRequest: HttpClient) { }

  GetGames() {

    return this.HttpRequest.get<GamesModel[]>(this.TicoNetServer + 'GetGames');
  }

  PostGame(game: GamesModel): Observable<GamesModel> {

    //console.log(localStorage.getItem('token'))

    return this.HttpRequest.post<GamesModel>(this.TicoNetServer + 'CreateGame/', game, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  PutGames(update:GamesModel):Observable<GamesModel>{

    return this.HttpRequest.put<any>(this.TicoNetServer +'UpdateGame/', update, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  DeleteGame(id: Number) {

    return this.HttpRequest.delete<String>(this.TicoNetServer +'DeleteGame/' + id, {
      headers: new HttpHeaders(
        {

          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });
  }


}
