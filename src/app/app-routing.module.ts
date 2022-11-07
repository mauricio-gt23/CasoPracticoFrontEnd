import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './home/guards/validate-token.guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainModule ),
    canActivate: [ValidateTokenGuard],
    canLoad: [ValidateTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
