import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      <button class="empty" nbButton shape="round" *ngIf="!value" > {{ value }} </button>
      <button class="select" nbButton hero shape="round" status="success"*ngIf="value == '☠️'"> {{ value }} </button>
      <button class="select" nbButton hero shape="round" status="info" *ngIf="value == '🎯'"> {{ value }} </button>
    </p>
  `,
  styleUrls: [
    './square.component.scss'
  ]
})
export class SquareComponent {

  @Input() value: '☠️' | '🎯';

}
