import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VistaTablaComponent } from './components/vista-tabla/vista-tabla.component';
import { InfProgramadorComponent } from './components/inf-programador/inf-programador.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'vista-tabla', component: VistaTablaComponent},
  { path: 'inf-programador', component: InfProgramadorComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
