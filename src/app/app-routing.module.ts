import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/a',
    pathMatch: 'full'
  },
  {
    path: 'pages/a',
    loadChildren: 'app/pages/a/a.module#AModule'
  },
  {
    path: 'pages/b',
    loadChildren: 'app/pages/b/b.module#BModule'
  },
  {
    path: '**',
    loadChildren: 'app/pages/a/a.module#AModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
