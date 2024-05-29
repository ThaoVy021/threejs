import { Component } from "@angular/core";
import { HeadComponent } from "../head/head.component";

@Component({
  selector: "threejs-main",
  standalone: true,
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
  imports: [HeadComponent],
})
export class MainComponent {}
