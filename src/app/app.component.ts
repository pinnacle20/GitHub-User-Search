import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
