import { AfterContentInit, Directive } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { asyncScheduler, BehaviorSubject } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Directive({
  selector: '[appRouterLinkActiveExtra]',
  exportAs: 'routerLinkActiveExtra'
})
export class RouterLinkActiveExtraDirective implements AfterContentInit {
  private readonly $isActive = new BehaviorSubject<boolean>(false);
  public readonly isActive$ = this.$isActive.asObservable().pipe(observeOn(asyncScheduler));

  constructor(private router: Router, private readonly routerLinkActive: RouterLinkActive) {
  }

  ngAfterContentInit(): void {
    this.update();
  }

  private update(): void {
    if (!this.router.navigated) {
      return;
    }
    Promise.resolve().then(() => {
      this.$isActive.next(this.routerLinkActive.isActive);
    });
  }
}
