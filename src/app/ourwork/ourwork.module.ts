import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurworkRoutingModule } from './ourwork-routing.module';
import { OurworkComponent } from './ourwork.component';


@NgModule({
  declarations: [
    OurworkComponent
  ],
  imports: [
    CommonModule,
    OurworkRoutingModule
  ]
})
export class OurworkModule { }
