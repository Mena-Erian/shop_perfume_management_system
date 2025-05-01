import { DarkModeService } from './../../shared/services/darkMode/dark-mode.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ToggleSwitchModule,
    ButtonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  isDarkMode: boolean = false;
  darkModeService = inject(DarkModeService);
  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.isDark();
    console.log(this.isDarkMode, this.darkModeService.isDark());
  }
  toggleDarkMode() {
    if (this.isDarkMode) {
      this.darkModeService.enableDarkMode();
    } else {
      this.darkModeService.disableDarkMode();
    }
  }
}
