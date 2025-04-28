import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-backoffice-layout',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent],
  templateUrl: './backoffice-layout.component.html',
  styleUrl: './backoffice-layout.component.scss',
})
export class BackofficeLayoutComponent {}
