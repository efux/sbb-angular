/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-tk',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M.4 0h10L10 2H6.4L4 13H1.3L3.7 2H0m14.8-2l-1.1 5.1L18.9 0h3.6l-6.6 5.9 4.2 7.1H17l-3.6-6.6L12 13H9.4l2.8-13"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceTkComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 23 13', width: '23', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceTkComponent],
  exports: [IconServiceTkComponent],
})
export class IconServiceTkModule { }
