/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-tf',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M.4 0h10L10 2H6.4L4 13H1.3L3.7 2H0m12.1-2h7.2l-.4 2h-4.5l-.7 3.2H18l-.4 2h-4.4L12 13H9.4"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceTfComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 20 13', width: '20', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceTfComponent],
  exports: [IconServiceTfComponent],
})
export class IconServiceTfModule { }
