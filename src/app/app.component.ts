import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
// component class
// don't modify app component
export class AppComponent {
  title = 'rebuild-sophia';
  name = 'John Blalock';
}
