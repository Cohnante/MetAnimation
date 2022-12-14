import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { QuesAnDudComponent } from './components/ques-an-dud/ques-an-dud.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import {SwiperModule} from 'swiper/angular';

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
    SwiperModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
