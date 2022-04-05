import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SocketClientService {
  url: string = environment.urlSocket;
  constructor() {}
  public socket: SocketIOClient.Socket;
  public connectionSocket(token: string, userName: string, userId: string) {
    this.socket = io.connect(this.url, {
      transports: ['polling', 'websocket'],
      query: {
        token: token,
        username: userName,
        userId: userId,
      },
    });
    this.socket.emit('authentication');
  }
  public disconnectSocket() {
    this.socket.disconnect();
  }
  public listernNotification$(): Observable<any> {
    return new Observable<any>((o) => {
      if (this.socket !== undefined) {
        this.socket.on('setPopUpNotification', (data) => {
          o.next(data);
        });
      }
    });
  }
}
