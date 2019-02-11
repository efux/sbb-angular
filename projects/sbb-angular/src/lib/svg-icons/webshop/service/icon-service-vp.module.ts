/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-vp',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h2.6l1.2 10.1L9.3 0h2.8L4.8 13H1.7m13.2-7h.9c1.4 0 2.9-.7 2.9-2.4 0-1.3-1.1-1.6-2.2-1.6h-.8c.1 0-.8 4-.8 4zm-1.5 7h-2.6l2.8-13h2.2c2.4 0 5.7.1 5.7 3.4 0 3.1-2.6 4.7-5.5 4.7h-1.5L13.4 13z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceVpComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 22 13', width: '22', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceVpComponent],
  exports: [IconServiceVpComponent],
})
export class IconServiceVpModule { }
