import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss", "./../assets/styles/index.scss"]
})
export class AppComponent implements OnInit {
  title = "Machine learning";

  ngOnInit() {
    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.classList.add("fadeOut");
      }, 1500);
    });
  }
}
