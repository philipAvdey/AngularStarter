import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component'
import { IncrementButtonComponent } from './increment-button/increment-button.component'

@Component({
  selector: 'app-root',
  imports: [HomeComponent, IncrementButtonComponent],
  template: `
  <main>
    <h1>Hello World</h1>
    <app-home></app-home>
    <app-increment-button></app-increment-button>
  </main>
    
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
