import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hacker-news';
  public stories: any = [];

  constructor(private api: HackerNewsService,
    private spinner: NgxSpinnerService) {
  }

  async ngOnInit() {
    this.api.showSpinner();
    await this.get();
  }

  async get() {
    this.stories = await this.api.getTopStories();
    this.stories = this.stories.slice(0, 30)
  }


}
