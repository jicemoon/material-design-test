import { Component } from '@angular/core';
import { getFadeTransAnimaiton } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    getFadeTransAnimaiton()
  ]
})
export class AppComponent {
  opened = false;

  navClickHandle(evt) {
    const nodeName = ((<MouseEvent>evt).target as HTMLElement).nodeName.toLowerCase();
    if (nodeName === 'span' || nodeName === 'a') {
      this.opened = false;
    }
  }
}
