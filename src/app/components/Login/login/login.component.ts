import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CredentialModel } from 'src/app/Interfaces/CredentialsDTO.';
import { AuthServiceService } from 'src/app/Services/Authentication/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  FormLogin: FormGroup;


  constructor(private FormLoginBuilder: FormBuilder, private Server: AuthServiceService) {

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

    this.Server.PostCredentials(credentials).subscribe((result:any) => {

      alert(JSON.stringify(result))

      localStorage.setItem("payload",JSON.stringify(result))

    }, (errorAuth: HttpErrorResponse) => {

      if (errorAuth.status === 404) {

        alert(JSON.stringify(errorAuth.error.text))
      } else if (errorAuth.status === 403) {

        alert(JSON.stringify(errorAuth.error.text))
      } else if(errorAuth.status === 500) {
        alert("El usuario no se pudo autenticar")
      }
    })

  }

  ngOnInit(): void {
  }

}
