/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-arrow-small-right',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.7 16.2l-.7-.6 3.6-3.6L10 8.4l.7-.7L15 12l-4.3 4.2z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconArrowSmallRightComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconArrowSmallRightComponent],
  exports: [IconArrowSmallRightComponent]
})
export class IconArrowSmallRightModule {}
