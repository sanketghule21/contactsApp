import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div class="header-container">
    <div><a routerLink="">Assignment</a></div>
  </div> `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
