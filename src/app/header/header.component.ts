import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageUrl;
  constructor() {
    this.pageUrl = {
      project: '/projects',
      main: '/',
      contact: '/contact'
    };
  }

  ngOnInit() {
  }

}
