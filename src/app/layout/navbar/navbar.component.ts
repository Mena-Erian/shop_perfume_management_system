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
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DarkModeService } from '../../shared/services/darkMode/dark-mode.service';
import { MultiSelectModule } from 'primeng/multiselect';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MultiSelectModule,

    ToggleSwitchModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnInit {
  cities!: City[];

  selectedCities!: City[];

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  authService = inject(AuthService);
  darkModeService = inject(DarkModeService);
  checkPlatformService = inject(CheckPlatformService);
  isDarkMode: boolean = false;
  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    if (this.checkPlatformService.isBrowser()) {
      this.isDarkMode = this.darkModeService.isDark();
      this.cd.detectChanges();
    }
  }
}
