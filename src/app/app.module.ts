import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ElementosModule } from './elementos/elementos.module'; //<---Agregado

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , ElementosModule //<---Agregado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }