import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Test5Component } from "./test5/test5.component";

@NgModule({
  declarations: [Test5Component],
  imports: [CommonModule],
  exports: [Test5Component],
})
export class TestModule {}
