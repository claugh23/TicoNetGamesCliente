import {Component, OnInit} from '@angular/core';
import {GamesModel} from "../../../Interfaces/GamesDTO";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GamesServicesService} from "../../../Services/Games/games-services.service";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})

export class GamesPageComponent implements OnInit {
  SelectedGame: GamesModel[] = [];
  GameId: any = 0;
  // FormAddGame: FormGroup;
  FormBuyGame: FormGroup;

  StateUserForm: boolean = false;
  StateGamesForm: boolean = true;
  StateCompra :boolean = false;
  ListGames: GamesModel[] = [];


  constructor(
    private routerNav:Router,
    private FormGameBuilder: FormBuilder,
    private FormEditBuilder: FormBuilder,
    private Ticonetserver: GamesServicesService) {

    // this.FormAddGame = this.FormGameBuilder.group({
    //
    //   form_gameName: new FormControl(),
    //   form_gameDescription: new FormControl(),
    //   form_gameCategory: new FormControl(),
    //   form_gameSize: new FormControl(),
    //   form_gamePrice: new FormControl(),
    //   form_gameImageURL: new FormControl()
    //
    // });

    this.FormBuyGame = this.FormEditBuilder.group({
      formEdit_name: new FormControl(),
      formEdit_description: new FormControl(),
      formEdit_category: new FormControl(),
      formEdit_size: new FormControl(),
      formEdit_price: new FormControl()
    })

  }

  AddGameToCart(game: GamesModel) {

    this.SelectedGame.pop();
    this.SelectedGame.push(game);

    this.FormBuyGame.patchValue({formEdit_name: this.SelectedGame[0].gameName})
    this.FormBuyGame.patchValue({formEdit_description: this.SelectedGame[0].gameDescription})
    this.FormBuyGame.patchValue({formEdit_category: this.SelectedGame[0].gameCategory})
    this.FormBuyGame.patchValue({formEdit_price: this.SelectedGame[0].gamePrice})
    this.FormBuyGame.patchValue({formEdit_size: this.SelectedGame[0].gameSize})

  }

  BuyGame(updates: GamesModel) {

    const finalUpdate: GamesModel = {
      _id: this.SelectedGame[0]._id,
      gameName: this.FormBuyGame.get('formEdit_name')?.value,
      gameDescription: this.FormBuyGame.get('formEdit_description')?.value,
      gameCategory: this.FormBuyGame.get('formEdit_category')?.value,
      gameImage: this.SelectedGame[0].gameImage,
      gamePrice: this.FormBuyGame.get('formEdit_price')?.value,
      gameSize: this.FormBuyGame.get('formEdit_size')?.value
    }

    this.Ticonetserver.PutGames(finalUpdate).subscribe((result: any) => {

      //alert(JSON.stringify(result.error.text))

      
    }, (errorUpdate: HttpErrorResponse) => {

      alert("ocurrio un error: " + '\n' + JSON.stringify(errorUpdate));
      this.StateCompra = true;
    })
  }

  // AddGame() {
  //
  //   const game: GamesModel = {
  //     _id: Math.random() * 10000000,
  //     gameName: this.FormAddGame.get('form_gameName')?.value,
  //     gameDescription: this.FormAddGame.get('form_gameDescription')?.value,
  //     gameCategory: this.FormAddGame.get('form_gameCategory')?.value,
  //     gameSize: this.FormAddGame.get('form_gameSize')?.value,
  //     gamePrice: Number.parseInt(this.FormAddGame.get('form_gamePrice')?.value),
  //     gameImage: this.FormAddGame.get('form_gameImageURL')?.value
  //   }
  //
  //   this.Ticonetserver.PostGame(game).subscribe((result): any => {
  //
  //     alert(JSON.stringify(result));
  //     this.LoadGameList();
  //
  //   }, (error: HttpErrorResponse) => {
  //
  //     alert("Ocurrio un error al generar el juego" + '\n' + JSON.stringify(error))
  //   })
  // }

  // DeleteGameNow() {
  //
  //   //this.GameId = this.SelectedGame.find()
  //
  //   //console.log(idNUmber);
  //   this.GameId = this.SelectedGame[0]._id;
  //
  //   console.log(this.GameId);
  //
  //
  //   this.Ticonetserver.DeleteGame(this.GameId).subscribe((result): any => {
  //
  //     alert(JSON.stringify(result))
  //
  //
  //   }, (errorDelete: HttpErrorResponse) => {
  //
  //     alert(JSON.stringify(errorDelete))
  //   })
  // }

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

  ngOnInit() {

    this.LoadGameList();
  }
}
