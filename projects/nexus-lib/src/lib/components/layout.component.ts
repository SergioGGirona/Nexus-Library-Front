import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nexusLib-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: ` <nexusLib-header>
      <ng-content select=".menu"></ng-content>
    </nexusLib-header>
    <ng-content select=".main"></ng-content>
    <nexusLib-footer></nexusLib-footer>`,
  styles: `:host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      justify-content: space-between;
    }`,
})
export class LayoutComponent {}
