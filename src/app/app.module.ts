import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VistaTablaComponent } from './components/vista-tabla/vista-tabla.component';
import { InfProgramadorComponent } from './components/inf-programador/inf-programador.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { BarraFooterComponent } from './components/barra-footer/barra-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaTablaComponent,
    InfProgramadorComponent,
    BarraMenuComponent,
    BarraFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
