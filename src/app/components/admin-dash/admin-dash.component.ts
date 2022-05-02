import { Component, OnInit } from '@angular/core';
import { GamesModel } from "../../Interfaces/GamesDTO";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { GamesServicesService } from "../../Services/Games/games-services.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  SelectedGame: GamesModel[] = [];
  GameId:any = 0;
  FormAddGame: FormGroup;

  StateUserForm: boolean = false;
  StateGamesForm: boolean = true;
  ListGames: GamesModel[] = [];


  constructor(private FormGameBuilder: FormBuilder, private Ticonetserver: GamesServicesService) {

    this.FormAddGame = this.FormGameBuilder.group({

      form_gameName: new FormControl(),
      form_gameDescription: new FormControl(),
      form_gameCategory: new FormControl(),
      form_gameSize: new FormControl(),
      form_gamePrice: new FormControl(),
      form_gameImageURL: new FormControl()

    })

  }

  CaptureGameSelection(game: GamesModel) {

    this.SelectedGame.pop();
    this.SelectedGame.push(game);
    //console.log(this.SelectedGame);

  }

  AddGame() {

    const game: GamesModel = {
      _id: Math.random() * 10000000,
      gameName: this.FormAddGame.get('form_gameName')?.value,
      gameDescription: this.FormAddGame.get('form_gameDescription')?.value,
      gameCategory: this.FormAddGame.get('form_gameCategory')?.value,
      gameSize: this.FormAddGame.get('form_gameSize')?.value,
      gamePrice: Number.parseInt(this.FormAddGame.get('form_gamePrice')?.value),
      gameImage: this.FormAddGame.get('form_gameImageURL')?.value
    }

    this.Ticonetserver.PostGame(game).subscribe((result): any => {

      alert(JSON.stringify(result));
      this.LoadGameList();

    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un error al generar el juego" + '\n' + JSON.stringify(error))
    })
  }

  DeleteGameNow() {

    //this.GameId = this.SelectedGame.find()

    //console.log(idNUmber);
    this.GameId = this.SelectedGame[0]._id;

    console.log(this.GameId);
    

    this.Ticonetserver.DeleteGame(this.GameId).subscribe((result): any => {

      alert(JSON.stringify(result))


    }, (errorDelete: HttpErrorResponse) => {

      alert(JSON.stringify(errorDelete))
    })
  }

  LoadGameList() {

    this.Ticonetserver.GetGames().subscribe((result): any => {

      this.ListGames = result;


    }, (errorGet: HttpErrorResponse) => {

      alert("Ocurrio un error al obtener los juegos: " + '\n' + JSON.stringify(errorGet))
    })
  }

  ngOnInit() {

    this.LoadGameList();
  }

}
