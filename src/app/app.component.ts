import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h1{
    color:blue;
  }
  `]
})
export class AppComponent {
  name = 'I am the APP component';
}
