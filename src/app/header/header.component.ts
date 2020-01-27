import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public menuTabs : any[] = ['news |', 'past |', 'comments |', 'ask |', 'show |', 'jobs |', 'submit'];
} 
