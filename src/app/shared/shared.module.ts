import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Service } from './services/b1.service';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent],
  providers: [B1Service]
})
export class SharedModule { }
