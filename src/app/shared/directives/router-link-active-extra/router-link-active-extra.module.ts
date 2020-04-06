import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActiveExtraDirective } from './router-link-active-extra.directive';



@NgModule({
  declarations: [RouterLinkActiveExtraDirective],
  imports: [
    CommonModule
  ],
  exports: [RouterLinkActiveExtraDirective]
})
export class RouterLinkActiveExtraModule { }
