import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {

  public stories: any = [];
  public newStories: any = [];
  public counter = 0;
  public startNum = 0;
  public endNum = 30;

  constructor(private api: HackerNewsService, public spinner: NgxSpinnerService) {
  }

  async ngOnInit() {
    await this.get();
  }
  
  async get() {
    let elements: any = [];
    elements = await this.api.getTopStories();
    elements.map(element => {
      this.counter++;
      this.stories.push({id: element, num: this.counter});
    });
    this.newStories = this.stories.slice(0, 30);  
  }

  getNextStories() {
    this.api.showSpinner();
    this.startNum = this.endNum;
    this.endNum+=30;
    if(this.endNum <= 500) {
    this.newStories = this.stories.slice(this.startNum,this.endNum);
    }
  }



}
