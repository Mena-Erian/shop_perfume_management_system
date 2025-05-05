import { CheckPlatformService } from './../../shared/services/checkPlatform/check-platform.service';
import { AuthService } from './../../core/services/auth/auth.service';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DarkModeService } from '../../shared/services/darkMode/dark-mode.service';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule, ToggleButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);
  darkModeService = inject(DarkModeService);
  checkPlatformService = inject(CheckPlatformService);
  isDarkMode: boolean = false;
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.isDark();
    // console.log(this.isDarkMode, this.darkModeService.isDark());
  }
  toggleDarkMode() {
    if (this.isDarkMode) {
      this.darkModeService.enableDarkMode();
    } else {
      this.darkModeService.disableDarkMode();
    }
  }
}
