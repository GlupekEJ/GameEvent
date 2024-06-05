import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormControl,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulier-standhouders',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './formulier-standhouders.component.html',
  styleUrl: './formulier-standhouders.component.css',
})
export class FormulierStandhoudersComponent {
  foods: Food[] = [
    { value: 'artiest-0', viewValue: 'Artiest' },
    { value: 'cosplay-1', viewValue: 'Cosplay' },
    { value: 'handelaar-2', viewValue: 'Handelaar' },
  ];

  toppings = new FormControl('');
  toppingList: string[] = [
    'A1   €100',
    'A2 €100',
    'A3 €100',
    'A4 €100',
    'A5 €100',
    'A6 €100',
    'A7 €100',
    'A8 €100',
    'A9 €100',
    'A10 €100',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'H10',
  ];


  /*fb = inject(FormBuilder);
  form = this.fb.group({
    companyName: ['', Validators.required],
    email: ['', Validators.required],
    voornaam: ['', Validators.required],
    achternaam: ['', Validators.required],
  });
  */
}

