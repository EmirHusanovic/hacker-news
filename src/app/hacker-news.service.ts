import { Injectable, isDevMode } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

//https://hacker-news.firebaseio.com/v0/topstories.json?orderBy=%22$key%22&startAt=%222%22&endAt=%225%22

@Injectable({
    providedIn: 'root'
})

export class HackerNewsService {
    constructor(private http: HttpClient,public spinner: NgxSpinnerService){
    }
    showSpinner(){
        this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    }

    async getTopStories() {
        return await this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json").toPromise();
    }
    async getNewStories() {
        return await this.http.get("https://hacker-news.firebaseio.com/v0/newstories.json").toPromise();
    }
    async getSingleStory(id)  : Promise<any>{
        return await this.http.get("https://hacker-news.firebaseio.com/v0/item/"+id+".json?print=pretty").toPromise();
    }


}