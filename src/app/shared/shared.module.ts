import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
import { RefreshbuttonComponent } from './components/refreshbutton/refreshbutton.component';



@NgModule({
  declarations: [
    BackbuttonComponent,
    RefreshbuttonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackbuttonComponent,
    RefreshbuttonComponent
  ]
})
export class SharedModule { }
