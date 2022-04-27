import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponetsconfigModule } from './components/componetsconfig.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponetsconfigModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
