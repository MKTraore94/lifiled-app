import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurworkComponent } from './ourwork.component';

const routes: Routes = [{ path: '', component: OurworkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurworkRoutingModule { }
