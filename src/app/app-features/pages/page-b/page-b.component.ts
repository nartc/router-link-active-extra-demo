import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b',
  template: `
    <p>
      page-b works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageBComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
