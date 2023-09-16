import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagquizComponent } from './components/flagquiz/flagquiz.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: "", component: FlagquizComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
