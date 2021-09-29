import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeModule, lightTheme, darkTheme } from './theme';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports:      [
    BrowserModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  declarations: [ AppComponent, TestComponent, Test2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
