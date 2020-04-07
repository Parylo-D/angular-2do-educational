import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle = 'Angular 2do';
  headerSubTitle = 'Educational project.';

  testOutputApp(event: string): void {
     console.log(event);
  }
}