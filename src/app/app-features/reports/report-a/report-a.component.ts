import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-report-a',
  template: `
    <p>
      report-a works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
