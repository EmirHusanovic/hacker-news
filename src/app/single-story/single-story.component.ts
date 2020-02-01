import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { Story } from 'src/models/models';
import { format } from 'date-fns';


@Component({
  selector: 'app-single-story',
  templateUrl: './single-story.component.html',
  styleUrls: ['./single-story.component.scss']
})
export class SingleStoryComponent implements OnInit {

  @Input() id;
  @Input() index;
  private data: any = [];
  public url;
  public hostUrl;
  public dateNow = new Date();
  public dateThen;
  public hoursAgo;
 
  

  constructor(private api:HackerNewsService) { }

  async ngOnInit() {
    this.data =  await this.api.getSingleStory(this.id);
    this.hostUrl = this.setUrl(this.data.url);
    this.hoursAgo = this.hoursPassed(this.data.time);
  }

  setUrl(url){
    if(url){
    this.url = new URL(url);
    return this.url.host;
    }
  }

  hoursPassed(time) {
    this.dateThen = new Date(time * 1000);
    return this.dateNow.getHours() - this.dateThen.getHours(); 
  }

}
