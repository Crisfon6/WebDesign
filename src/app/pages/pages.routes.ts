import { Routes } from '@angular/router';
import { CssGridComponent } from './css-grid/css-grid.component';
import { SassComponent } from './sass/sass.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { IndexComponent } from './index/index.component';

import { FlexGridComponent } from './flex-grid/flex-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'css-grid',
        component: CssGridComponent,
      },
      {
        path: 'flexbox',
        component: FlexboxComponent,
      },
      {
        path: 'flex-grid',
        component: FlexGridComponent
      },

    ],
  },


]





