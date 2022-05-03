import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { DashboardPrincipalComponent } from './DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { GamesPageComponent } from './Games/games-page/games-page.component';
import { LoginComponent } from './Login/login/login.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { RegisterComponent } from './Register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './Cart/shopping-cart.component';

@NgModule({
  declarations: [
    AdminDashComponent,
    DashboardPrincipalComponent,
    FooterComponent,
    GamesPageComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminDashComponent,
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
