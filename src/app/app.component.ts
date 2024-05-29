import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { HeadComponent } from "./head/head.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, MainComponent, HeadComponent],
})
export class AppComponent {
  title = "threejs";
}
