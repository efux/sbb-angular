/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sledge-snowshoe',
  // tslint:disable:max-line-length
  template: `
    <svg
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M6 38.5h26.5c5.478 0 8-1.806 8-6.5M6 32.501h28m-24.5 0V38.5m7-5.999V38.5m7-5.999V38.5m7.001-5.999V38.5M41 18.5c-10.446 0-14.707 9-25.5 9a9 9 0 0 1 0-18c10.793 0 15.054 9 25.5 9zM13.5 9.721v5.314m4-5.427v5.428m-4 6.929v5.312m4-5.312v5.429M26.502 13v11M41 18.5H19.5m-4-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSledgeSnowshoeComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSledgeSnowshoeComponent],
  exports: [IconSledgeSnowshoeComponent]
})
export class IconSledgeSnowshoeModule {}
