import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineEvent } from '../../pages/historique/historique';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  standalone: true
})
export class TimelineComponent {
  @Input() events: TimelineEvent[] = [];
}
