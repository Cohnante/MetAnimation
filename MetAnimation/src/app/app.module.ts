import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { QuesAnDudComponent } from './components/ques-an-dud/ques-an-dud.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LoginComponent } from './components/perfiles/login/login.component';
import { RegisterComponent } from './components/perfiles/register/register.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { LobbyComponent } from './components/lobby/lobby.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CursosComponent,
    PerfilesComponent,
    QuesAnDudComponent,
    MembresiaComponent,
    LoginComponent,
    RegisterComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
