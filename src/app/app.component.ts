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
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

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
