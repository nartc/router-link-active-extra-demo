import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { sideNavs } from './side-navs';

@Component({
  selector: 'app-side-nav',
  template: `
    <mat-sidenav-container>
      <mat-sidenav class="sidenav" [fixedInViewport]="true" [mode]="'side'" [opened]="true">
        <mat-accordion displayMode="flat">
          <mat-nav-list [disableRipple]="true">
            <ng-container *ngFor="let navItem of sideNavs;">
              <mat-expansion-panel class="mat-elevation-z0"
                                   routerLinkActive="expanded"
                                   appRouterLinkActiveExtra
                                   #rla="routerLinkActiveExtra"
                                   [expanded]="rla.isActive$ | async">
                <mat-expansion-panel-header>{{navItem.title}}</mat-expansion-panel-header>
                <ng-container *ngFor="let childNav of navItem.children">
                  <mat-list-item [routerLink]="childNav.route" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <small>{{childNav.title}}</small>
                  </mat-list-item>
                </ng-container>
              </mat-expansion-panel>
            </ng-container>
          </mat-nav-list>
        </mat-accordion>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
      `
      .sidenav {
        min-width: 14rem;
      }

      ::ng-deep mat-list-item.active .mat-list-item-content {
        color: deepskyblue;
      }

    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {

  sideNavs = sideNavs;

  constructor() {
  }

  ngOnInit(): void {
  }

}
