import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAtbXA_ryL1IAQ0B_N0IYGBtFEevh4Bf-M',
        authDomain: 'bcbc-3716f.firebaseapp.com',
        projectId: 'bcbc-3716f',
        storageBucket: 'bcbc-3716f.firebasestorage.app',
        messagingSenderId: '2601790820',
        appId: '1:2601790820:web:a6116b4935d4b181505e71',
        measurementId: 'G-3RRGCBP2KE',
      }),
    ),
    provideFirestore(() => getFirestore()),
  ],
};
