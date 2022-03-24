import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './RegistroUsuario/registro-usuario/registro-usuario.component';
import { DashboardPrincipalComponent } from './DashboardPrincipal/dashboard-principal/dashboard-principal.component';
import { AcercaNosotrosComponent } from './AcercaNosotros/acerca-nosotros/acerca-nosotros.component';
import { CarritoDeseosComponent } from './CarritoDeseos/carrito-deseos/carrito-deseos.component';
import { PasarelaComprasComponent } from './PasarelaCompras/pasarela-compras/pasarela-compras.component';
import { LoginComponent } from './Login/login/login.component';

@NgModule({
  declarations: [
    
    RegistroUsuarioComponent,
    DashboardPrincipalComponent,
    AcercaNosotrosComponent,
    CarritoDeseosComponent,
    PasarelaComprasComponent,
    LoginComponent,
  
  ],
  imports: [
    CommonModule,
  
  ],
  exports:[
    RegistroUsuarioComponent,
    DashboardPrincipalComponent,
    AcercaNosotrosComponent,
    CarritoDeseosComponent,
    PasarelaComprasComponent,
    LoginComponent,
  ]

})
export class ComponetsconfigModule { }
