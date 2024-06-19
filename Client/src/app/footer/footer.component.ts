import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() message: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendToParent() {
    this.messageEvent.emit('youtube link niet actief(volgens child)');
  }
}
