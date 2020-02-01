import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public menuTabs : any[] = ['new |', 'past |', 'comments |', 'ask |', 'show |', 'jobs |', 'submit'];

  redirectTo(menuName) {
    console.log("Menuu", menuName)
    if (menuName = "new |") {
      this.router.navigate(['/newest']);
    } else if (menuName = "home") {
      console.log("homee")
      this.router.navigate(['/top']);
    }
  }
} 
