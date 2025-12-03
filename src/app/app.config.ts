import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { setAPIKey } from '@interceptors/api-key.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    // provideHttpClient(withInterceptors(setAPIKey)),
    provideHttpClient(withInterceptors([setAPIKey])),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
