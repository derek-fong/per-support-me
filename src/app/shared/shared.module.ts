import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  exports: [
    CommonModule,
    MaterializeDirective,
  ]
})
export class SharedModule { }
