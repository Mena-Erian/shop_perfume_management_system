import { CheckPlatformService } from './../checkPlatform/check-platform.service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  checkPlatformService = inject(CheckPlatformService);
  // renderer2 = inject(Renderer2);

  key: string = 'darkMode';

  //enable and disable
  /**
   * cheack for dark in local storage
   * put or take the dark class from html Element
   * check platform before use localstorage
   */
  enableDarkMode(): boolean {
    const el = document.documentElement;
    if (this.checkPlatformService.isBrowser()) {
      localStorage.setItem(this.key, 'enable');
      document.documentElement.classList.add('dark');
      // console.log(localStorage.getItem(this.key));
    }
    return true;
  }
  disableDarkMode(): boolean {
    const el = document.documentElement;
    if (this.checkPlatformService.isBrowser()) {
      localStorage.setItem(this.key, 'disable');
      document.documentElement.classList.remove('dark');
      // console.log(localStorage.getItem(this.key));
    }
    return false;
  }
  isDark(): boolean {
    if (this.checkPlatformService.isBrowser()) {
      if (localStorage.getItem(this.key) === 'enable') {
        return this.enableDarkMode();
      } else {
        return this.disableDarkMode();
      }
    } else {
      return this.enableDarkMode();
    }
  }
}
