import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPrincipalComponent } from './components/DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { GamesPageComponent } from './components/Games/games-page/games-page.component';
import { GamesAdministradorComponent } from './components/GamesAdministrador/games-administrador/games-administrador.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Register/register/register.component';
import { UsersAdministratorComponent } from './components/UsersAdministrator/users-administrator/users-administrator.component';

const routes: Routes = [

  {path:'TicoNetAdministrador',component:GamesAdministradorComponent},
  {path:'TicoNetUsers',component:UsersAdministratorComponent},
  {path:'Games',component:GamesPageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'TicoNetGames',component:DashboardPrincipalComponent},
  {path:'**',redirectTo:'/Login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
