import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/Interfaces/UsersDTO';
import { RegistrationServiceService } from 'src/app/Services/Registration/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FormRegistration: FormGroup;

  StateRegistration:Boolean = false;

  constructor(private FormRegistrationBuilder: FormBuilder, private Server: RegistrationServiceService,private routerNav:Router) {

    this.FormRegistration = this.FormRegistrationBuilder.group({

      Form_id: new FormControl(),
      Form_name: new FormControl(),
      Form_phone: new FormControl(),
      Form_mail: new FormControl(),
      Form_password: new FormControl(),

    })


  }

  GenerateUser() {

    const user: UsersModel = {
      _id: this.FormRegistration.get('Form_id')?.value,
      name: this.FormRegistration.get('Form_name')?.value,
      phone: Number.parseInt(this.FormRegistration.get('Form_phone')?.value),
      mail: this.FormRegistration.get('Form_mail')?.value,
      password: this.FormRegistration.get('Form_password')?.value,
      role:"User"

    }

    this.Server.PostUser(user).subscribe((result: any) => {

      alert(JSON.stringify(result))

      this.StateRegistration = true;


    }, (errorPost: HttpErrorResponse) => {

      if (errorPost.status === 200) {
        alert("Registro Completo: ")
      } else {

        alert("Ocurrio un error al registrar: " + "\n" + errorPost.error.text)
      }


    })
  }
  LoadLogin(){
    this.routerNav.navigateByUrl('/Login');
  }

  ngOnInit(): void {
  }

}
