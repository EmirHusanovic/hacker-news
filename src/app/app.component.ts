import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hacker-news';
  public stories: any = [];

  constructor(private api: HackerNewsService) {
    
    
  }

  async ngOnInit(){
    await this.get();
    console.log("Aaaa are", this.stories);
  }
  private get headers(): { [key: string]: string } {
    return { 'Content-Type': 'application/json' };
  }

  async get() {
    this.stories = await this.api.getTopStories();
    this.stories = this.stories.slice(0,30)
  }
  

}
