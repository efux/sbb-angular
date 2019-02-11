/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-googleplus',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M8.1 10.2v2h3.5c-.5 2.5-4 3.4-5.9 1.7-1.9-1.5-1.8-4.7.2-6 1.4-1.1 3.4-.8 4.7.2.6-.5 1.1-1 1.6-1.6C11 5.6 9.6 4.9 8.1 5 5 4.9 2.1 7.6 2 10.7c-.2 2.5 1.5 5 3.9 5.9 2.4.9 5.5.3 7-1.8 1-1.3 1.2-3 1.1-4.6H8.1zm11.1-.1V8.4h-1.7v1.7h-1.7v1.7h1.7v1.7h1.7v-1.7h1.7v-1.7h-1.7z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGoogleplusComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24', width: '24', height: '24' });
  }
}

@NgModule({
  declarations: [IconGoogleplusComponent],
  exports: [IconGoogleplusComponent],
})
export class IconGoogleplusModule { }
