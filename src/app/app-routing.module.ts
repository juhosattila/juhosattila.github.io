import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { ResearchComponent } from './components/research/research.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "about", component: AboutComponent },
  { path: "resume", component: ResumeComponent },
  { path: "research", component: ResearchComponent },
  { path: "posts", component: PostsComponent },
  { path: "post/:id", component: PostDetailsComponent },
  
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
