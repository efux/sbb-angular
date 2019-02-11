/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-avatar',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path fill="#767676" d="M12.239 19.52v2.07l-5.163 1.844a4.3 4.3 0 0 0-2.847 4.04v2.158c0 .475.384.859.859.859 0 0 7.343 3.509 10.87 3.509 3.72 0 10.872-3.51 10.872-3.51a.858.858 0 0 0 .858-.858v-2.157a4.3 4.3 0 0 0-2.847-4.041l-5.163-1.844v-2.3c1.646-1.406 2.718-3.684 2.718-6.251 0-4.26-2.952-7.724-6.58-7.724-3.629 0-6.58 3.464-6.58 7.724 0 2.712 1.196 5.103 3.003 6.482z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAvatarComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 30 30', width: '30', height: '30' });
  }
}

@NgModule({
  declarations: [IconAvatarComponent],
  exports: [IconAvatarComponent],
})
export class IconAvatarModule { }
