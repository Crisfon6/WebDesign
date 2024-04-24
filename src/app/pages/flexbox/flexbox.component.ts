import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card, CardComponent, RoundedButtonComponent } from 'ngx-components-lib-cf6';
import { RouteMenu } from '../../interfaces/routeMenu.interface';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RoundedButtonComponent,CardComponent],
  templateUrl: './flexbox.component.html',
  styleUrl: './flexbox.component.scss'
})
export class FlexboxComponent {
  cardInfo: Card = {
    title: 'What is FlexBox?',
    description:
    `Is a CSS layout model that allows for the alignment and distribution of space within a container element. It's a one-dimensional layout method that arranges items in rows or columns, with items expanding to fill extra space or shrinking to fit into smaller spaces.`,
    color: '#3884ff',
  };
  sections: RouteMenu[] = [
    { name: 'Exercise 1', route: 'exercise1',icon: 'dashboard' },
    { name: 'Exercise 2', route: 'exercise2',icon: 'dashboard' },
    { name: 'Exercise 3', route: 'exercise3',icon: 'dashboard' },
    { name: 'Exercise 4', route: 'exercise4',icon: 'dashboard' },
    { name: 'Exercise 5', route: 'exercise5',icon: 'dashboard' },
  ];
  html = `
  <div class="background">
    <h1 class="title">What is CSS Grid?</h1>
    <p class="description open-sans">
        CSS Grid is a layout system in CSS (Cascading Style Sheets) that allows web developers to create complex grid-based layouts with ease. It provides a two-dimensional grid-based layout system, with rows and columns, making it easier to design web pages
        without having to rely on floats and positioning.
    </p>
</div>
  `;
}
