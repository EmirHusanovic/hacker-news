import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerArray = ['Guidelines | ','FAQ | ','Support | ','API | ', 'Security | ','Lists | ','Bookmarklet | ','Legal | ',' Apply to YC | ','Contact'  ]
  constructor() { }

  ngOnInit() {
  }

}
