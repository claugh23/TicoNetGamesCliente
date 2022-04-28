import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrincipalComponent } from './DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { LoginComponent } from './Login/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { RegisterComponent } from './Register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesPageComponent } from './Games/games-page/games-page.component';

@NgModule({
  declarations: [
    
    
    DashboardPrincipalComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    RegisterComponent,
    GamesPageComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports:[
  
    DashboardPrincipalComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    AppRoutingModule
  ]

})
export class ComponetsconfigModule { }
