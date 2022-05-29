import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { GamesModel } from "../../Interfaces/GamesDTO";

@Injectable({
  providedIn: 'root'
})
export class GamesServicesService {


  TicoNetServer: string = 'https://tico-net-games-server.herokuapp.com/Games/'

  constructor(private HttpRequest: HttpClient) { }

  GetGames() {

    return this.HttpRequest.get<GamesModel[]>(this.TicoNetServer + 'GetGames');
  }

  PostGame(game: GamesModel): Observable<GamesModel> {

    //console.log(localStorage.getItem('token'))

    return this.HttpRequest.post<GamesModel>('https://tico-net-games-server.herokuapp.com/Games/CreateGame/', game, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  PutGames(update:GamesModel):Observable<GamesModel>{

    return this.HttpRequest.put<any>('https://tico-net-games-server.herokuapp.com/Games/UpdateGame/', update, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });

  }

  DeleteGame(id: Number) {

    return this.HttpRequest.delete<String>('https://tico-net-games-server.herokuapp.com/Games/DeleteGame/' + id, {
      headers: new HttpHeaders(
        {

          'Authorization': JSON.stringify(localStorage.getItem('token')),


        }
      )
    });
  }


}
