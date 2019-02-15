/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-pencil',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.001 9.997L14.003 7l2.996-2.996 2.998 2.985-2.996 3.008zM15.417 7l1.582 1.582 1.584-1.59-1.582-1.575L15.417 7zm-7.42 12H5v-2.997l8-8L15.997 11l-8 8zM6 18h1.583l7-7.001L13 9.417l-7 7V18z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPencilComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconPencilComponent],
  exports: [IconPencilComponent],
})
export class IconPencilModule { }
