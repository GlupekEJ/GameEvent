import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', Validators.required],
    voornaam: ['', Validators.required],
    achternaam: ['', Validators.required],
    beschrijving: ['', Validators.required],
  });
}
