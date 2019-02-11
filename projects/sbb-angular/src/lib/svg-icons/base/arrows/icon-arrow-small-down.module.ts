/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-arrow-small-down',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M7.7 10.7l.7-.7 3.6 3.6 3.6-3.6.7.7L12 15l-4.3-4.3z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowSmallDownComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24', width: '24', height: '24' });
  }
}

@NgModule({
  declarations: [IconArrowSmallDownComponent],
  exports: [IconArrowSmallDownComponent],
})
export class IconArrowSmallDownModule { }
