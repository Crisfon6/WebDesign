import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouteMenu } from '../interfaces/routeMenu.interface';
import { RoundedButtonComponent } from 'ngx-components-lib-cf6';


@Component({
  selector: 'app-css-grid',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RoundedButtonComponent],
  templateUrl: './css-grid.component.html',
  styleUrl: './css-grid.component.scss'
})
export class CssGridComponent {
  @ViewChild('renderDiv') renderHtml!:ElementRef;

  sections: RouteMenu[] = [
    {name:"Exercise 1",route:'exercise1'},
    {name:"Exercise 2",route:'exercise2'},
    {name:"Exercise 3",route:'exercise3'},
    {name:"Exercise 4",route:'exercise4'},
    {name:"Exercise 5",route:'exercise5'},
    {name:"Exercise 6",route:'exercise6'},
  ];
  html =`
  <div class="background">
    <h1 class="title">What is CSS Grid?</h1>
    <p class="description open-sans">
        CSS Grid is a layout system in CSS (Cascading Style Sheets) that allows web developers to create complex grid-based layouts with ease. It provides a two-dimensional grid-based layout system, with rows and columns, making it easier to design web pages
        without having to rely on floats and positioning.
    </p>
</div>
  `;
  render(){
// Sanitizar el HTML para evitar ataques XSS
const sanitizedHtml = this.html;

// Renderizar el HTML en el contenedor
const container = document.getElementById('renderHtml')!;
container.innerHTML = sanitizedHtml;
  }
}
