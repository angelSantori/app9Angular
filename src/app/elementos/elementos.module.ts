import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';

@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DadoComponent] //<---Agregado
})
export class ElementosModule { }