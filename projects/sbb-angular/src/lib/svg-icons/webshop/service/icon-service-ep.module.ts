/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-ep',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 0h7.7L10 2H4.9l-.7 3.3h4.5l-.4 2H3.8L3.1 11h5.1l-.4 2H0m14.3-7h.9c1.4 0 2.9-.7 2.9-2.4C18.1 2.3 17 2 15.9 2h-.8l-.8 4zm-1.5 7h-2.6L13 0h2.2c2.4 0 5.7.1 5.7 3.4 0 3.1-2.6 4.7-5.5 4.7h-1.5L12.8 13z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceEpComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 21 13', width: '21', height: '13' });
  }
}

@NgModule({
  declarations: [IconServiceEpComponent],
  exports: [IconServiceEpComponent],
})
export class IconServiceEpModule { }
