/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-clock-minutes',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226"><path d="M109.4 21.8h7.1l1.6 115h-10.3z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconClockMinutesComponent extends IconBase {
  constructor() {
    super({ width: '226px', height: '226px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconClockMinutesComponent],
  exports: [IconClockMinutesComponent],
})
export class IconClockMinutesModule { }
