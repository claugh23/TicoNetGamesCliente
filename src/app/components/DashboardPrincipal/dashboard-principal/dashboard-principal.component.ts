import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesModel } from 'src/app/Interfaces/GamesDTO';
import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { AdministrationServiceService } from 'src/app/Services/Administration/administration-service.service';
import { AuthServiceService } from 'src/app/Services/Authentication/auth-service.service';
import { GamesServicesService } from 'src/app/Services/Games/games-services.service';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styleUrls: ['./dashboard-principal.component.css']
})
export class DashboardPrincipalComponent implements OnInit {


  ListGames: GamesModel[] = [];
  PayloadUser: any[] = [];

  StateEditProfile: boolean;
  StateViewProfile: boolean;

  FormEditUser: FormGroup;


  constructor(
    private FormEditBuilder: FormBuilder,
    private Ticonetserver: GamesServicesService,
    private routerNav: Router,
    private ServerUsers: AdministrationServiceService) {
    this.FormEditUser = this.FormEditBuilder.group({
      formEdit_name: new FormControl(),
      formEdit_phone: new FormControl(),
      formEdit_mail: new FormControl(),
      formEdit_password: new FormControl(),
      formEdit_role: new FormControl()
    })

    this.StateViewProfile = true;
    this.StateEditProfile = false;
  }
  CaptureUserSelection(user: UsersModel) {

    //this.PayloadUser.pop();
    this.PayloadUser.push(user);
    this.FormEditUser.patchValue({ formEdit_name: this.PayloadUser[0].name })
    this.FormEditUser.patchValue({ formEdit_phone: this.PayloadUser[0].phone })
    this.FormEditUser.patchValue({ formEdit_mail: this.PayloadUser[0].mail })
    this.FormEditUser.patchValue({ formEdit_password: this.PayloadUser[0].password })
    

  }
  UpdateUser() {

    const finalUpdate: UsersModel = {
      _id: this.PayloadUser[0]._id,
      name: this.FormEditUser.get('formEdit_name')?.value,
      phone: this.FormEditUser.get('formEdit_phone')?.value,
      mail: this.FormEditUser.get('formEdit_mail')?.value,
      password: this.FormEditUser.get('formEdit_password')?.value,
      role: "User"
    }

    this.ServerUsers.PutUser(finalUpdate).subscribe((result: any) => {

      alert(JSON.stringify(result.error.text.message))
      
    }, (errorUpdate: HttpErrorResponse) => {



      alert("ocurrio un error: " + '\n' + JSON.stringify(errorUpdate));
      this.routerNav.navigateByUrl('/Login')

    })
  }
  ChangeToEditView() {


    switch (this.StateViewProfile) {
      case true:
        this.StateViewProfile = false;
        this.StateEditProfile = true;
        break;
      case false:
        this.StateViewProfile = true;
        this.StateEditProfile = false;

        break;
      default:
        break;
    }


  }












  LoadUserAccount() {

    this.PayloadUser.pop();
    const keys = Object.keys(window.localStorage);  // all keys

    keys.forEach(key => {
      const item = JSON.parse(localStorage.getItem(key) + '');  //item with type Object
      this.PayloadUser.push(item);
    });
    console.log(this.PayloadUser) // arry of object
  }


  LoadGameList() {

    this.Ticonetserver.GetGames().subscribe((result): any => {

      this.ListGames = result;


    }, (errorGet: HttpErrorResponse) => {

      alert("Ocurrio un error al obtener los juegos: " + '\n' + JSON.stringify(errorGet))
    })
  }
  LoadHome() {
    this.routerNav.navigateByUrl('/TicoNetGames')
  }
  LoadGames() {
    this.routerNav.navigateByUrl('/Games')
  }
  ngOnInit(): void {

    this.LoadGameList()
    this.LoadUserAccount()
  }

}
