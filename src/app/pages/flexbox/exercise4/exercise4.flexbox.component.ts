import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card, CardComponent, RoundedButtonComponent } from 'ngx-components-lib-cf6';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RoundedButtonComponent,CardComponent],
  templateUrl: './exercise4.flexbox.component.html',
  styleUrl: './exercise4.flexbox.component.scss'
})
export class Exercise4FlexboxComponent {

}
