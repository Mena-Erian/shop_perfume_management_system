import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckPlatformService {
  constructor(@Inject(PLATFORM_ID) private id: object) {}
  isBrowser(): boolean {
    // console.log(isPlatformBrowser(this.id));
    return isPlatformBrowser(this.id);
  }
  isServer(): boolean {
    // console.log(isPlatformServer(this.id));
    return isPlatformServer(this.id);
  }
}
