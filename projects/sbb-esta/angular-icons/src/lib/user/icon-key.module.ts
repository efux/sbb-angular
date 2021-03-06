/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-key',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M16.5 8c0 2.507-1.993 4.5-4.5 4.5A4.472 4.472 0 0 1 7.5 8c0-2.507 1.993-4.5 4.5-4.5 2.507 0 4.5 1.993 4.5 4.5zm-3-.023c0 .841-.639 1.523-1.495 1.523-.856 0-1.505-.682-1.505-1.523 0-.84.649-1.477 1.505-1.477.856 0 1.495.636 1.495 1.477zm-4 3.777V18.8l2.5 2.5 2.5-2.5v-7.046M12 14.5h2.5m-2.507 2H14.5"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M24.75 12c0 3.76-2.99 6.75-6.75 6.75s-6.75-2.99-6.75-6.75S14.24 5.25 18 5.25s6.75 2.99 6.75 6.75zm-4.5-.034c0 1.261-.959 2.284-2.242 2.284-1.284 0-2.258-1.023-2.258-2.284 0-1.262.974-2.216 2.258-2.216s2.242.954 2.242 2.216zm-6 5.665V28.2L18 31.95l3.75-3.75V17.63M18 21.75h3.75m-3.76 3h3.76"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconKeyComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconKeyComponent],
  exports: [IconKeyComponent]
})
export class IconKeyModule {}
