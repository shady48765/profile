import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AllComponents/home/home.component';
import { ContactComponent } from './AllComponents/contact/contact.component';
import { ResumeComponent } from './AllComponents/resume/resume.component';
import { WorkComponent } from './AllComponents/work/work.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'work', component: WorkComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
