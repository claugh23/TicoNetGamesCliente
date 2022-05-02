import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CredentialModel } from 'src/app/Interfaces/CredentialsDTO.';
import { AuthServiceService } from 'src/app/Services/Authentication/auth-service.service';
import { Router } from "@angular/router";
import { UsersModel } from "../../../Interfaces/UsersDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  FormLogin: FormGroup;
  GetPayload: any[] = [];


  constructor(private FormLoginBuilder: FormBuilder, private Server: AuthServiceService, private routerNav: Router) {

    this.FormLogin = this.FormLoginBuilder.group({

      Form_mail: new FormControl(),
      Form_pass: new FormControl()
    })

  }

  AuthenticateUser() {

    const credentials: CredentialModel = {
      mail: this.FormLogin.get('Form_mail')?.value,
      password: this.FormLogin.get('Form_pass')?.value
    }

    this.Server.PostCredentials(credentials).subscribe((result: any) => {

      localStorage.clear();
      localStorage.setItem("token", JSON.stringify(result.password))
      localStorage.setItem("payload",JSON.stringify(result))

      this.routerNav.navigateByUrl("/TicoNetAdministrador");
      this.GetPayload.push(result)





    }, (errorAuth: HttpErrorResponse) => {

      if (errorAuth.status === 404) {

        alert(JSON.stringify(errorAuth.error.text))
      } else if (errorAuth.status === 403) {

        alert(JSON.stringify(errorAuth.error.text))
      } else if (errorAuth.status === 500) {
        alert("El usuario no se pudo autenticar")
      }
    })

  }

  ngOnInit(): void {
  }

}
