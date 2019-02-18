/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-pl',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><path d="M4.1 6H5c1.4 0 2.9-.7 2.9-2.4 0-1.3-1-1.6-2.1-1.6h-.9l-.8 4zm-1.5 7H0L2.8 0H5c2.4 0 5.7.1 5.7 3.4 0 3.1-2.6 4.7-5.5 4.7H3.7L2.6 13zM13.1 0h2.6l-2.3 11h5.1l-.4 2h-7.7"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServicePlComponent extends IconBase {
  constructor() {
    super({ width: '19px', height: '13px', ratio: 1.4615384615384615 });
  }
}

@NgModule({
  declarations: [IconServicePlComponent],
  exports: [IconServicePlComponent],
})
export class IconServicePlModule { }