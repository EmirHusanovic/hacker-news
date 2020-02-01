import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-newest-stories',
  templateUrl: './newest-stories.component.html',
  styleUrls: ['./newest-stories.component.scss']
})
export class NewestStoriesComponent implements OnInit {

  public stories : any = [];
  constructor(public api: HackerNewsService, public spinner: NgxSpinnerService) { }

 async ngOnInit() {
   this.api.showSpinner();
  await this.get();
  }

  async get() {
    this.stories = await this.api.getNewStories();
    this.stories = this.stories.slice(0, 30)
  }

}
