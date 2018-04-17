import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminViewComponent } from './admin-view/admin-view.component';
import{ HomeViewComponent } from './home-view/home-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'admin',
    component: AdminViewComponent,
    data: { title: 'Admin View' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
