import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
})
export class App {
  heading: string;
  text: string;
  
  constructor() {
    this.heading = `Angular v${VERSION.full} + Material Design Lite`;
    this.text = "Smash forehead on keyboard to continue.";
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
}