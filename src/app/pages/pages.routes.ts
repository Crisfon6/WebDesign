import { Routes } from '@angular/router';
import { Exercise1Component } from './css-grid/exercise1/exercise1.component';
import { Exercise2Component } from './css-grid/exercise2/exercise2.component';
import { Exercise3Component } from './css-grid/exercise3/exercise3.component';
import { Exercise4Component } from './css-grid/exercise4/exercise4.component';
import { Exercise5Component } from './css-grid/exercise5/exercise5.component';
import { Exercise6Component } from './css-grid/exercise6/exercise6.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { SassComponent } from './sass/sass.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { IndexComponent } from './index/index.component';
import { Exercise1FlexboxComponent } from './flexbox/exercise1/exercise1.flexbox.component';
import { Exercise2FlexboxComponent } from './flexbox/exercise2/exercise2.flexbox.component';
import { Exercise3FlexboxComponent } from './flexbox/exercise3/exercise3.flexbox.component';
import { Exercise4FlexboxComponent } from './flexbox/exercise4/exercise4.flexbox.component';
import { Exercise5FlexboxComponent } from './flexbox/exercise5/exercise5.flexbox.component';
import { Exercise6FlexboxComponent } from './flexbox/exercise6/exercise6.flexbox.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children:[
      {
        path: 'css-grid',
        component: CssGridComponent,
        children: [
          {
            path: 'exercise1',
            component: Exercise1Component,
          },
          {
            path: 'exercise2',
            component: Exercise2Component,
          },
          {
            path: 'exercise3',
            component: Exercise3Component,
          },
          {
            path: 'exercise4',
            component: Exercise4Component,
          },
          {
            path: 'exercise5',
            component: Exercise5Component,
          },
          {
            path: 'exercise6',
            component: Exercise6Component,
          },
        ],
      },
      {
        path: 'flexbox',
        component: FlexboxComponent,
        children: [
          {
            path: 'exercise1',
            component: Exercise1FlexboxComponent,
          },
          {
            path: 'exercise2',
            component: Exercise2FlexboxComponent,
          },
          {
            path: 'exercise3',
            component: Exercise3FlexboxComponent,
          },
          {
            path: 'exercise4',
            component: Exercise4FlexboxComponent,
          },
          {
            path: 'exercise5',
            component: Exercise5FlexboxComponent,
          },
          {
            path: 'exercise6',
            component: Exercise6FlexboxComponent,
          },
        ],
      },

      {
        path: 'sass',
        component: SassComponent,
      },
    ]
  },



  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
