import {Component, OnInit} from '@angular/core';
import { DirectiveServiceService } from './services/directive-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor( ) {}
}
