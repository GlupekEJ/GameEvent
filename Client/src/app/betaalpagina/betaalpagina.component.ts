import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

interface BetalingMethodes {
  betalingsMethode: string;
}


@Component({
  selector: 'app-betaalpagina',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './betaalpagina.component.html',
  styleUrl: './betaalpagina.component.css',
})
export class BetaalpaginaComponent {
  methodeControl = new FormControl<BetalingMethodes | null>(null, [
    Validators.required,
  ]);
  methodes: BetalingMethodes[] = [
    { betalingsMethode: 'Bancontact' },
    { betalingsMethode: 'Mastercard' },
    { betalingsMethode: 'VISA' },
    { betalingsMethode: 'PayPal' }
  ];
}
