/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-tt',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M.4 0h10L10 2H6.4L4 13H1.3L3.7 2H0m10.8-2l-.4 2H14l-2.4 11h2.7l2.4-11h3.7l.4-2"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceTtComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 21 13', width: '21', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceTtComponent],
  exports: [IconServiceTtComponent],
})
export class IconServiceTtModule { }
