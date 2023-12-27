import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { AdministrationServiceService } from 'src/app/Services/Administration/administration-service.service';

@Component({
  selector: 'app-users-administrator',
  templateUrl: './users-administrator.component.html',
  styleUrls: ['./users-administrator.component.css']
})
export class UsersAdministratorComponent implements OnInit {



  SelectedUser: UsersModel[] = [];
  UserDNI: any = 0;
  FormAddUser: UntypedFormGroup;
  FormEditUser: UntypedFormGroup;

  StateUserForm: boolean = false;
  StateGamesForm: boolean = true;
  ListGames: UsersModel[] = [];


  constructor(
    private routerNav: Router,
    private FormUserBuilder: UntypedFormBuilder,
    private FormEditBuilder: UntypedFormBuilder,
    private Ticonetserver: AdministrationServiceService) {

    this.FormAddUser = this.FormUserBuilder.group({

      form_userId: new UntypedFormControl(),
      form_userName: new UntypedFormControl(),
      form_userPhone: new UntypedFormControl(),
      form_userMail: new UntypedFormControl(),
      form_userPassword: new UntypedFormControl(),
      form_userRole: new UntypedFormControl(),

    });

    this.FormEditUser = this.FormEditBuilder.group({
      formEdit_name: new UntypedFormControl(),
      formEdit_phone: new UntypedFormControl(),
      formEdit_mail: new UntypedFormControl(),
      formEdit_password: new UntypedFormControl(),
     
    })

  }

  CaptureUserSelection(user: UsersModel) {

    this.SelectedUser.pop();
    this.SelectedUser.push(user);
    this.FormEditUser.patchValue({ formEdit_name: this.SelectedUser[0].name })
    this.FormEditUser.patchValue({ formEdit_phone: this.SelectedUser[0].phone })
    this.FormEditUser.patchValue({ formEdit_mail: this.SelectedUser[0].mail })
    this.FormEditUser.patchValue({ formEdit_password: this.SelectedUser[0].password })
    

  }

  UpdateUser(updates: UsersModel) {

    const finalUpdate: UsersModel = {
      _id: this.SelectedUser[0]._id,
      name: this.FormEditUser.get('formEdit_name')?.value,
      phone: this.FormEditUser.get('formEdit_phone')?.value,
      mail: this.FormEditUser.get('formEdit_mail')?.value,
      password: this.FormEditUser.get('formEdit_password')?.value,
      role: this.FormEditUser.get('formEdit_role')?.value
    }

    this.Ticonetserver.PutUser(finalUpdate).subscribe((result: any) => {

      alert(JSON.stringify(result.error.text))
    }, (errorUpdate: HttpErrorResponse) => {

      alert("ocurrio un error: " + '\n' + JSON.stringify(errorUpdate));
    })
  }

  AddUser() {

    const game: UsersModel = {
      _id: this.FormAddUser.get('form_userId')?.value,
      name: this.FormAddUser.get('form_userName')?.value,
      phone: this.FormAddUser.get('form_userPhone')?.value,
      mail: this.FormAddUser.get('form_userMail')?.value,
      password: this.FormAddUser.get('form_userPassword')?.value,
      role: this.FormAddUser.get('form_userRole')?.value

    }

    this.Ticonetserver.PostUser(game).subscribe((result): any => {

      alert(JSON.stringify(result));
      this.LoadUsersList();

    }, (error: HttpErrorResponse) => {

      alert("Ocurrio un error al generar el juego" + '\n' + JSON.stringify(error))
    })
  }

  DeleteUserNow() {


    this.UserDNI = this.SelectedUser[0]._id;

    console.log(this.UserDNI);


    this.Ticonetserver.DeleteUser(this.UserDNI).subscribe((result): any => {

      alert(JSON.stringify(result))


    }, (errorDelete: HttpErrorResponse) => {

      alert(JSON.stringify(errorDelete))
    })
  }

  LoadUsersList() {

    this.Ticonetserver.GetUsers().subscribe((result): any => {

      this.ListGames = result;


    }, (errorGet: HttpErrorResponse) => {

      alert("Ocurrio un error al obtener los juegos: " + '\n' + JSON.stringify(errorGet))
    })
  }

  LoadGamesDash() {

    this.routerNav.navigateByUrl('/TicoNetAdministrador')
  }
  LoadUsersDash() {
    this.routerNav.navigateByUrl('/TicoNetAdministrador')
  }

  ngOnInit() {

    this.LoadUsersList();
  }

}
