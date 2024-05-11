import { Component } from '@angular/core';

@Component({
  selector: 'app-floorplan',
  standalone: true,
  imports: [],
  templateUrl: './floorplan.component.html',
  styleUrl: './floorplan.component.css',
})
export class FloorplanComponent {
  testje: boolean = true;
  setToActive() {
    this.testje = !this.testje;
    console.log('pressed');
  }
}
