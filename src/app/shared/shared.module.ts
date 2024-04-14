import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { StripNewLinePipe } from './strip-new-line.pipe';

const ExportsAsIs = [
  CommonModule,
  HttpClientModule,
  FontAwesomeModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  NgClickOutsideDirective,
];

@NgModule({
  declarations: [StripNewLinePipe],
  imports: [
    ...ExportsAsIs,
    provideFirebaseApp(() => initializeApp({"projectId":"metro-lcd","appId":"1:31875830124:web:95f23f4270717180662349","storageBucket":"metro-lcd.appspot.com","apiKey":"AIzaSyDZASCWN_ZTSOlzUvS_cdfeFuq6Op07CTc","authDomain":"metro-lcd.firebaseapp.com","messagingSenderId":"31875830124","measurementId":"G-FVKX0VXY3Z"})),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
    ...ExportsAsIs,
    FirebaseAppModule,
    FirestoreModule,
    StripNewLinePipe
  ],
})
export class SharedModule {}
