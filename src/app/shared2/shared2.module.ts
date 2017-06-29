import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Service } from './services/c1.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class Shared2Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Shared2Module,
      providers: [C1Service]
    };
  }
}
