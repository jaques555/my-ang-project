import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyformComponent } from './myform/myform.component';
import { MylistaComponent } from './mylista/mylista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyformComponent,
    MylistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
