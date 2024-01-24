import { Component } from '@angular/core';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nexusLib-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <img src="../assets/nexusLogotipo.png" alt="Nexus Library icon" />
      <span>© 2023 - Sergio G. Girona 💚 </span>
      <address>
        Look more of my projects!
        <a
          href="https://github.com/SergioGGirona"
          aria-label="Link to creator's web"
          >GitHub</a
        >
        |
        <a
          href="https://www.linkedin.com/in/sergiogonzalezgirona/"
          aria-label="Link to creator's web"
          >My LinkedIn</a
        >
      </address>
    </footer>
  `,
  styles: `
  footer {
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 10vh;
    width: 100vw;
    padding:1rem;
    line-height: center;
  }
  img {
    width: 10rem;
  }
  address {
    font-style: normal;
  }
  a {
    color: black;

  }
  a:hover{
    color: #f38b72;
  }

  `,
})
export class FooterComponent {}
