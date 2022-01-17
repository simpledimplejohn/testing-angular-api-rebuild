import { Component, OnInit } from '@angular/core';

// decorator marks class as an angualr component
@Component({
  selector: 'app-nav', // copy this
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
