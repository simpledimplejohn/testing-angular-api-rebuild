import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'User Portal'
  image = "assets/John_C_20.png" //image link
  constructor() { }

  ngOnInit(): void {
  }

}
