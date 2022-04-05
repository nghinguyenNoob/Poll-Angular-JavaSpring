import { MenuItem } from './../../../store/models/menu-item.i';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SocketClientService } from '../../../socket-client/socket-client.service';
import { StoreFacade } from '../../../store/store-facades/login.store-facade';

@Component({
  selector: 'brc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menu: MenuItem[];
  @Input() countNotification: number = 2;
  @Output() logout = new EventEmitter();
  @Output() emitValueLink : EventEmitter<string> = new EventEmitter<string>();
  @Output() emitValueNotification : EventEmitter<string> = new EventEmitter<string>();
  showToggle = false;
  toggleMenu = true;

  constructor(
    private router: Router,
    private socketClient: SocketClientService,
    private storeFace : StoreFacade
  ) {}

  ngOnInit(): void {
    if (window.innerWidth - 300 < this.menu.length * 100) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
      this.showToggle = false;
    }
  }
  emitLink(data : string){
    this.emitValueLink.emit(data);
  }
  navigateNotification(data:string){
    this.emitValueNotification.emit(data);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth - 300 < this.menu.length * 100) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
      this.showToggle = false;
    }
  }
  clickLogout() {
    localStorage.clear();
    this.storeFace.logout();
    this.socketClient.disconnectSocket();
    this.router.navigate(['/login']);
  }
}
