import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nexus-searcher',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss',
})
export class SearcherComponent {}
