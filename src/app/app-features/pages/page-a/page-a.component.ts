import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  template: `
    <p>
      page-a works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageAComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
