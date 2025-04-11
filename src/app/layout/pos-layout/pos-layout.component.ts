import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pos-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './pos-layout.component.html',
  styleUrl: './pos-layout.component.scss',
})
export class PosLayoutComponent {}
