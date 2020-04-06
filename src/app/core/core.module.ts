import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { RouterLinkActiveExtraModule } from '../shared/directives/router-link-active-extra/router-link-active-extra.module';

import { CoreRoutingModule } from './core-routing.module';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { SideNavComponent } from './components/side-nav.component';


@NgModule({
  declarations: [MainLayoutComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    RouterLinkActiveExtraModule
  ]
})
export class CoreModule { }
