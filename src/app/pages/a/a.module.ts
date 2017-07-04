import { CardModule } from './../../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "app/pages/a/a.routing";
import { ContentComponent } from "app/pages/a/content/content.component";
import { SharedModule } from "app/shared/shared.module";
import { Shared2Module } from "app/shared2/shared2.module";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    Shared2Module,
    CardModule
  ],
  declarations: [ContentComponent]
})
export class AModule { }
