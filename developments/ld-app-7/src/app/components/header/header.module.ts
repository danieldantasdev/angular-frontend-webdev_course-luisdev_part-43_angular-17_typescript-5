import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderRoutingModule
  ],
  exports: []
})

export class HeaderModule { }
