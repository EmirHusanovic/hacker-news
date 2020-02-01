import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStoriesComponent } from './new-stories/new-stories.component';
import { AppComponent } from './app.component';
import { NewestStoriesComponent } from './newest-stories/newest-stories.component';


const routes: Routes = [
 
  {
    path: "",
    component: NewStoriesComponent
  },
  {
    path: "news",
    component: NewStoriesComponent
  },
  {
    path: "newest",
    component: NewestStoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
