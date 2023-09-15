import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainmenuComponent } from 'src/components/mainmenu/mainmenu.component'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
