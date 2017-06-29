import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "app/pages/b/b.routing";
import { ContentComponent } from "app/pages/b/content/content.component";
import { SharedModule } from "app/shared/shared.module";
import { Shared2Module } from "app/shared2/shared2.module";


@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    Shared2Module
  ],
  declarations: [ContentComponent]
})
export class BModule { }
