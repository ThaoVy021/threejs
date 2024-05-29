import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  ApplicationRef,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, registerLocaleData } from "@angular/common";

// import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeadComponent } from "./head/head.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppComponent,
    MainComponent,
    HeadComponent,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}
