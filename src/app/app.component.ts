import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouteMenu } from './interfaces/routeMenu.interface';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RoundedButtonComponent } from 'ngx-components-lib-cf6';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,FooterComponent,NavbarComponent,RoundedButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-design';
  topicsMenu: RouteMenu[] = [
    {
      route: 'Css-Grid',
      name: 'Css Grid',
      icon: 'dashboard'
    },
    {
      route: 'flexbox',
      name: 'Flexbox',
      icon: 'aspect_ratio'
    },
    {
      route: 'sass',
      name: 'Sass',
      icon: 'description'
    }

  ];
get style():Record<string,string>{
    return {'grid-template-columns': `repeat(${this.topicsMenu.length}, 1fr)`}
}


}
