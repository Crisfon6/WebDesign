import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import {routes as routesPage } from '../app/pages/pages.routes';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routesPage,withHashLocation(),withComponentInputBinding(),),provideRouter(routes,withHashLocation())]
};
