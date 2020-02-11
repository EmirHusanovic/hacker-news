import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SingleStoryComponent } from './single-story/single-story.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NewStoriesComponent } from './new-stories/new-stories.component';
import { NewestStoriesComponent } from './newest-stories/newest-stories.component';
import { FooterComponent } from './footer/footer.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleStoryComponent,
    NewStoriesComponent,
    NewestStoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
