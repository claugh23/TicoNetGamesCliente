import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesModel } from 'src/app/Interfaces/GamesDTO';
import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { GamesServicesService } from 'src/app/Services/Games/games-services.service';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styleUrls: ['./dashboard-principal.component.css']
})
export class DashboardPrincipalComponent implements OnInit {

  ListGames: GamesModel[] = [];
  PayloadUser: any[] = [];

  constructor(private Ticonetserver: GamesServicesService,private routerNav:Router) { }




  LoadGameList() {

    this.Ticonetserver.GetGames().subscribe((result): any => {

      this.ListGames = result;


    }, (errorGet: HttpErrorResponse) => {

      alert("Ocurrio un error al obtener los juegos: " + '\n' + JSON.stringify(errorGet))
    })
  }
  LoadHome(){
    this.routerNav.navigateByUrl('/TicoNetGames')
  }
  LoadGames(){
    this.routerNav.navigateByUrl('/Games')
  }
  ngOnInit():void {

    this.LoadGameList()

  }

}
