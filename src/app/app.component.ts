import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './../assets/styles/index.scss']
})
export class AppComponent implements OnInit {
  title = 'Machine learning';

  ngOnInit() {
    console.log('Read script...');
    window.addEventListener('load', () => {
      console.log('Start spinner...');
      const loader = document.getElementById('loader');
      setTimeout(() => {
        console.log('Hide spinner...');
        loader.classList.add('fadeOut');
        console.log('Spinner hidden.');
      }, 1500);
    });
  }

}
