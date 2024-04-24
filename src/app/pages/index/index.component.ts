import { Component } from '@angular/core';
import { RouteMenu } from '../../interfaces/routeMenu.interface';
import { Card, CardComponent, RoundedButtonComponent } from 'ngx-components-lib-cf6';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardComponent, RoundedButtonComponent,RouterLink,RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  cardsInfo: Card[] = [
    {
      title: 'What is CSS?',
      description: `
      CSS stands for Cascading Style Sheets. It's a style sheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media types.`,
      color: '#3884ff',
    },
    {
      title: 'What is Html?',
      description: `
      HTML, known as Hypertext Markup Language, serves as the backbone of web development, providing a standardized structure for crafting web pages. This language employs elements, or tags, to organize and present content effectively.`,
      color: '#ff631ad0',
    },
  ];
  topicsMenu: RouteMenu[] = [
    {
      route: 'css-grid',
      name: 'Css Grid',
      icon: 'dashboard'
    },
    {
      route: 'flexbox',
      name: 'Flexbox',
      icon: 'aspect_ratio'
    },
    {
      route: 'flex-grid',
      name: 'Flexbox & Css Grid',
      icon: 'description'
    }

  ];
}
