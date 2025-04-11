import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-backoffice-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './backoffice-layout.component.html',
  styleUrl: './backoffice-layout.component.scss',
})
export class BackofficeLayoutComponent {}
