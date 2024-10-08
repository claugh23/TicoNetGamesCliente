import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component';
import { ComponetsConfigModule } from './components/componetsconfig.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    ComponetsConfigModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
