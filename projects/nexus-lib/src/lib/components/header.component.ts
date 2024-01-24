import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nexusLib-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>Nexus Library</h1>
      <img src="../../assets/nexusLogo.png" alt="" />
      <ng-content></ng-content>
    </header>
  `,
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    mix-blend-mode: difference;
  }

  header {
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: none;
    gap: 1rem;
  }
  img{
    height: 4rem;
    padding: 1rem;
  }`,
})
export class HeaderComponent {}
