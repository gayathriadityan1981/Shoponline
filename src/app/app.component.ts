import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
 // selector: 'cm-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpClient]
})
export class AppComponent {
  title = 'shoponline';
}
