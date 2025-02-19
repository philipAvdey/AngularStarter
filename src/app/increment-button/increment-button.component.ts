import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  imports: [],
  template: `
    <div>
      <button (click)="click()">Click me!</button>
      <div>{{ state.count }}</div>
      <div>{{ state.count2 }}</div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncrementButtonComponent {
  state: { count: number,
                count2: number,

   } = { count: 0, count2:12 };


  click = () => {
    this.state.count += 1; 
    this.state.count2 *= 12; 
  }

}
