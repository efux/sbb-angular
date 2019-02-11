/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-y',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 7.6L0 0h2.8l1.9 5.5L8.9 0h3L5.7 7.6 4.5 13H1.9"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceYComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 12 13', width: '12', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceYComponent],
  exports: [IconServiceYComponent],
})
export class IconServiceYModule { }
