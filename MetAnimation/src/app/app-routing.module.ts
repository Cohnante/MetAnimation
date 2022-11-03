import { NoticiasComponent } from './components/noticias/noticias.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { QuesAnDudComponent } from './components/ques-an-dud/ques-an-dud.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LoginComponent } from './components/perfiles/login/login.component';
import { RegisterComponent } from './components/perfiles/register/register.component';
import { LobbyComponent } from './components/lobby/lobby.component';

const routes: Routes = [
  {path: 'cursos', component:CursosComponent},
  {path: 'perfil',component:PerfilesComponent},
  {path: 'questions',component:QuesAnDudComponent},
  {path: 'pay',component:MembresiaComponent},
  {path: 'perfil/login',component:LoginComponent},
  {path:'perfil/register', component:RegisterComponent},
  {path: 'Noticia',component:NoticiasComponent},
  {path: '**', component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
