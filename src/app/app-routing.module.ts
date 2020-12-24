import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    pathMatch: 'full'
  },
  {
    path: "jobs",
    component: JobsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
