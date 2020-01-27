import { Injectable, isDevMode } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from 'src/models/models';
//https://hacker-news.firebaseio.com/v0/topstories.json?orderBy=%22$key%22&startAt=%222%22&endAt=%225%22

@Injectable({
    providedIn: 'root'
})

export class HackerNewsService {
    constructor(private http: HttpClient){
    }

    // getTopStoriesIds(): Observable<any>{
    //     return this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json?orderBy=%22$key%22&startAt=%222%22&endAt=%225%22");
    // }

    async getTopStories() {
        return await this.http.get("https://hacker-news.firebaseio.com/v0/topstories.json").toPromise();
    }

    async getSingleStory(id)  : Promise<any>{
        return await this.http.get("https://hacker-news.firebaseio.com/v0/item/"+id+".json?print=pretty").toPromise();
    }
}