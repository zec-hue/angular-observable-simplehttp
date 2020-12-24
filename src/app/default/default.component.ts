import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = 'jobsearch';
  }

}
