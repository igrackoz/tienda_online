import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const router: Routes = [

  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},

  { path: 'registro', component: RegistroComponent },

  { path: '**', redirectTo: 'registro' }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
