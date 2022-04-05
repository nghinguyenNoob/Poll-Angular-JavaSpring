import { Component, OnInit } from '@angular/core';
// import { SocketClientService } from '../../../socket-client/socket-client.service';

@Component({
  selector: 'brc-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.scss'],
})
export class PopupPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onGetId(popup: Object) {
    console.log(popup);
  }
  onMarkAsRead(popup: Object) {
    console.log(popup);
  }
}
