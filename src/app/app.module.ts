import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagquizComponent } from './components/flagquiz/flagquiz.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { QuizgameComponent } from './components/quizgame/quizgame.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagquizComponent,
    ContactsComponent,
    QuizgameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
