import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-formulier-standhouders',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './formulier-standhouders.component.html',
  styleUrl: './formulier-standhouders.component.css',
})
export class FormulierStandhoudersComponent {}
