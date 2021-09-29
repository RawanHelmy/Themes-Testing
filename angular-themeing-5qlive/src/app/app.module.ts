import { ThemeModule, darkTheme, lightTheme } from "./theme";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Test2Component } from "./test2/test2.component";
import { TestComponent } from "./test/test.component";
import { TestModule } from "./test/test.module";

@NgModule({
  imports: [
    BrowserModule,
    TestModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: "light",
    }),
  ],
  declarations: [AppComponent, TestComponent, Test2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
