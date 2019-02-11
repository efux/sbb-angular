/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-clock',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-15c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm5 7h-5V7h-1v6h6v-1z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconClockComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24', width: '24', height: '24' });
  }
}

@NgModule({
  declarations: [IconClockComponent],
  exports: [IconClockComponent],
})
export class IconClockModule { }
