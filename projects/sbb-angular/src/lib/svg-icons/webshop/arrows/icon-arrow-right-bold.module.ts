/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-arrow-right-bold',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M13 10.1l5.6 5.9-5.6 6 1.4 1.4 7.1-7.4-7.1-7.3z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowRightBoldComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 32 32', width: '32', height: '32' });
  }
}

@NgModule({
  declarations: [IconArrowRightBoldComponent],
  exports: [IconArrowRightBoldComponent],
})
export class IconArrowRightBoldModule { }
