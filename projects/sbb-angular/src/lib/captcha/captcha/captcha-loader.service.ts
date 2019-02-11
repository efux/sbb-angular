import {
  Inject,
  Injectable,
  InjectionToken,
  Optional
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { WindowRef } from './windowref.service';
import { RECAPTCHA_DEFAULT_BASE_URL, RECAPTCHA_CALLBACK_NAME } from './captcha-settings';

export const RECAPTCHA_LANGUAGE = new InjectionToken<string>('recaptcha-language');
export const RECAPTCHA_BASE_URL = new InjectionToken<string>('recaptcha-base-url');
export const RECAPTCHA_NONCE = new InjectionToken<string>('recaptcha-nonce-tag');

@Injectable()
export class CaptchaLoaderService {
  /**
   * @internal
   * @nocollapse
   */
  private static ready: BehaviorSubject<ReCaptchaV2.ReCaptcha> = null;

  ready: Observable<ReCaptchaV2.ReCaptcha>;

  /** @internal */
  private _language: string;
  /** @internal */
  private _baseUrl: string;
  /** @internal */
  private _nonce: string;

  constructor(
    private _windowRef: WindowRef,
    @Optional() @Inject(RECAPTCHA_LANGUAGE) language?: string,
    @Optional() @Inject(RECAPTCHA_BASE_URL) baseUrl?: string,
    @Optional() @Inject(RECAPTCHA_NONCE) nonce?: string
  ) {
    this._language = language;
    this._baseUrl = baseUrl;
    this._nonce = nonce;
    this.init();
    this.ready = CaptchaLoaderService.ready.asObservable();
  }

  /** @internal */
  private init() {
    if (CaptchaLoaderService.ready) {
      return;
    }
    this._windowRef.nativeWindow.ng2recaptchaloaded = () => {
      CaptchaLoaderService.ready.next(grecaptcha);
    };
    CaptchaLoaderService.ready = new BehaviorSubject<ReCaptchaV2.ReCaptcha>(null);
    const script = document.createElement('script') as HTMLScriptElement;
    script.innerHTML = '';
    const langParam = this._language ? '&hl=' + this._language : '';
    const baseUrl = this._baseUrl || RECAPTCHA_DEFAULT_BASE_URL;
    script.src = `${baseUrl}?render=explicit&onload=${RECAPTCHA_CALLBACK_NAME}${langParam}`;
    if (this._nonce) {
      script.nonce = this._nonce;
    }
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
