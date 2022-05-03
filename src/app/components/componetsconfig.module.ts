import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPrincipalComponent } from './DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { GamesPageComponent } from './Games/games-page/games-page.component';
import { LoginComponent } from './Login/login/login.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { RegisterComponent } from './Register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './Cart/shopping-cart.component';
import { GamesAdministradorComponent } from './GamesAdministrador/games-administrador/games-administrador.component';
import { UsersAdministratorComponent } from './UsersAdministrator/users-administrator/users-administrator.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
   
    DashboardPrincipalComponent,
    FooterComponent,
    GamesPageComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    ShoppingCartComponent,
    GamesAdministradorComponent,
    UsersAdministratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    GamesAdministradorComponent,
    DashboardPrincipalComponent,
    FooterComponent,
    GamesPageComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    ShoppingCartComponent
  ]

})
export class ComponetsconfigModule { }
