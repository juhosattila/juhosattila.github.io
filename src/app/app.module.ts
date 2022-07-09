import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResearchComponent } from './components/research/research.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ResumeComponent,
    PostsComponent,
    PostDetailsComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
