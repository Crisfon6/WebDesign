import { Component } from '@angular/core';
import { RouteMenu } from '../../interfaces/routeMenu.interface';
import { Card, CardComponent, RoundedButtonComponent } from 'ngx-components-lib-cf6';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Topic } from '../../interfaces';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardComponent, RoundedButtonComponent,RouterLink,RouterOutlet,CapitalizePipe],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  cardsInfo: Card[] = environment.principalCards;
  topics: Topic[] = environment.topics;
}
