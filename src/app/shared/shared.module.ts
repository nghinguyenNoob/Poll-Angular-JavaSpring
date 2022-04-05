import { MaterialCustomModule } from './material-custom/material-custom.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { NotificationIconComponent } from './components/notification-icon/notification-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderItemComponent,
    NotificationIconComponent,
  ],
  imports: [CommonModule, MaterialCustomModule],
  exports: [
    MaterialCustomModule,
    HeaderComponent,
    HeaderItemComponent,
    NotificationIconComponent,
  ],
})
export class SharedModule {}
