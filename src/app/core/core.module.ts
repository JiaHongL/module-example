import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Service } from './services/a1.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports:[HeaderComponent, SidebarComponent],
  providers: [A1Service]
})
export class CoreModule { 
      constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. it in the AppModule only');
        }
    }
}
