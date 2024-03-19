import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-sidebar',
  standalone: true,
  imports: [CommonModule],
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
  template: `
    <ul>
      <li><a href="/">Dashboard</a></li>
    </ul>
  `,
})
export class SidebarComponent {}
