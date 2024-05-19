import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-formulier-standhouders',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatRadioModule],
  templateUrl: './formulier-standhouders.component.html',
  styleUrl: './formulier-standhouders.component.css',
})
export class FormulierStandhoudersComponent {
  categorySelection!: string;
  categories: string[] = ['All', 'Retro', 'New', 'Merch'];
}
