import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../../nexus-lib/src/lib/components/layout.component';
import { SearcherComponent } from './components/searcher/searcher.component';
@Component({
  selector: 'nexus-root',
  standalone: true,
  imports: [RouterOutlet, SearcherComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nexusApp';
}
