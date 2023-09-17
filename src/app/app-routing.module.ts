import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagquizComponent } from './components/flagquiz/flagquiz.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { QuizgameComponent } from './components/quizgame/quizgame.component';

const routes: Routes = [
  { path: "", component: FlagquizComponent },
  { path: "contacts", component: ContactsComponent },
  { path: 'quizgame/:difficulty', component: QuizgameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
