import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { CardComponent } from '../pages/main/components/card/card';

import { SwingModule } from 'angular2-swing';

import { PlayerService } from '../core/service/playerService'

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    SwingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    CardComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlayerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
