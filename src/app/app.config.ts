import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-fb877","appId":"1:190129204555:web:4c160565ed72e8e825ccce","storageBucket":"simple-crm-fb877.appspot.com","apiKey":"AIzaSyBR4vXU8oPdFEhy1X5DtcftvWHPHKeAasA","authDomain":"simple-crm-fb877.firebaseapp.com","messagingSenderId":"190129204555"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
