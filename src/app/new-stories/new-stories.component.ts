import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {

  public stories: any = [];

  constructor(private api: HackerNewsService,) {
  }

  async ngOnInit() {

    await this.get();
  }
  private get headers(): { [key: string]: string } {
    return { 'Content-Type': 'application/json' };
  }

  async get() {
    this.stories = await this.api.getTopStories();
    this.stories = this.stories.slice(0, 30)
  }

}
