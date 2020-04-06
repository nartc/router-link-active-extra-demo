import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-side-nav>
      <router-outlet></router-outlet>
    </app-side-nav>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
