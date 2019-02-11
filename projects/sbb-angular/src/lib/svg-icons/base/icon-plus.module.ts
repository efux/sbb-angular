/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-plus',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M20 12.5h-7.5V20h-1v-7.5H4v-1h7.5V4h1v7.5H20v1z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPlusComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24', width: '24', height: '24' });
  }
}

@NgModule({
  declarations: [IconPlusComponent],
  exports: [IconPlusComponent],
})
export class IconPlusModule { }
