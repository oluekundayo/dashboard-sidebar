import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainScreenModule } from './components/main-screen/main-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
