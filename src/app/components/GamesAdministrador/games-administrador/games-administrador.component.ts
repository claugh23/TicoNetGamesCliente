import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesModel } from 'src/app/Interfaces/GamesDTO';
import { GamesServicesService } from 'src/app/Services/Games/games-services.service';

@Component({
  selector: 'app-games-administrador',
  templateUrl: './games-administrador.component.html',
  styleUrls: ['./games-administrador.component.css']
})
export class GamesAdministradorComponent implements OnInit {

 
  SelectedGame: GamesModel[] = [];
  GameId: any = 0;
  FormAddGame: FormGroup;
  FormEditGame: FormGroup;

  StateUserForm: boolean = false;
  StateGamesForm: boolean = true;
  ListGames: GamesModel[] = [];


  constructor(
    private routerNav:Router,
    private FormGameBuilder: FormBuilder,
    private FormEditBuilder: FormBuilder,
    private Ticonetserver: GamesServicesService) {

    this.FormAddGame = this.FormGameBuilder.group({

      form_gameName: new FormControl(),
      form_gameDescription: new FormControl(),
      form_gameCategory: new FormControl(),
      form_gameSize: new FormControl(),
      form_gamePrice: new FormControl(),
      form_gameImageURL: new FormControl()

    });

    this.FormEditGame = this.FormEditBuilder.group({
      formEdit_name: new FormControl(),
      formEdit_description: new FormControl(),
      formEdit_category: new FormControl(),
      formEdit_size: new FormControl(),
      formEdit_price: new FormControl()
    })

  }

  CaptureGameSelection(game: GamesModel) {

    this.SelectedGame.pop();
    this.SelectedGame.push(game);

    this.FormEditGame.patchValue({ formEdit_name: this.SelectedGame[0].gameName })
    this.FormEditGame.patchValue({ formEdit_description: this.SelectedGame[0].gameDescription })
    this.FormEditGame.patchValue({ formEdit_category: this.SelectedGame[0].gameCategory })
    this.FormEditGame.patchValue({ formEdit_price: this.SelectedGame[0].gamePrice })
    this.FormEditGame.patchValue({ formEdit_size: this.SelectedGame[0].gameSize })

  }

  UpdateGames(updates: GamesModel) {

    const finalUpdate: GamesModel = {
      _id: this.SelectedGame[0]._id,
      gameName: this.FormEditGame.get('formEdit_name')?.value,
      gameDescription: this.FormEditGame.get('formEdit_description')?.value,
      gameCategory: this.FormEditGame.get('formEdit_category')?.value,
      gameImage: this.SelectedGame[0].gameImage,
      gamePrice: this.FormEditGame.get('formEdit_price')?.value,
      gameSize: this.FormEditGame.get('formEdit_size')?.value
    }

    this.Ticonetserver.PutGames(finalUpdate).subscribe((result: any) => {

      alert(JSON.stringify(result.error.text))
    }, (errorUpdate: HttpErrorResponse) => {

      alert("ocurrio un error: " + '\n' + JSON.stringify(errorUpdate));
    })
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

  SwitchFormSelected() {

    if (this.StateUserForm === false) {

      this.StateGamesForm = false;
      this.StateUserForm = true;
    } else if (this.StateGamesForm === true) {

      this.StateUserForm = false;
      this.StateGamesForm = true;
    }

  }
  LoadGamesDash(){

    this.routerNav.navigateByUrl('/TicoNetAdministrador')
  }
  LoadUsersDash(){
    this.routerNav.navigateByUrl('/TicoNetUsers')
  }

  ngOnInit() {

    this.LoadGameList();
  }


}
