import { Component, Input } from '@angular/core';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrls: ['./ld-wrapper.component.scss']
})
export class LdWrapperComponent {
  @Input() type: 'one-col' | 'two-col' = 'two-col';
}
