import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../core/services/auth/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pos-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    NgClass,
  ],
  templateUrl: './pos-layout.component.html',
  styleUrl: './pos-layout.component.scss',
})
export class PosLayoutComponent {
  authServer = inject(AuthService);
  constructor() {}
}
