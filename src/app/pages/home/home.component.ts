import { Component, OnInit} from '@angular/core';
import { WindowRef } from '../../windowRef/window.provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  srollCount;
  constructor() { }

  ngOnInit() {
  }

}
