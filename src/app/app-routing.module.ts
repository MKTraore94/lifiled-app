import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path:'bar-nav',component:BarNavComponent},
  {path:'footer',component:FooterComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },  
  { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) }, 
  { path: 'ourwork', loadChildren: () => import('./ourwork/ourwork.module').then(m => m.OurworkModule) }, 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
