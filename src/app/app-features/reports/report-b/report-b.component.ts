import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-b',
  template: `
    <p>
      report-b works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
