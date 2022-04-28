import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPrincipalComponent } from './components/DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { GamesPageComponent } from './components/Games/games-page/games-page.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Register/register/register.component';

const routes: Routes = [

  {path:'Games',component:GamesPageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'TicoNetGames',component:DashboardPrincipalComponent},
  {path:'**',redirectTo:'/TicoNetGames'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
