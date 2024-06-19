import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
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

  async send() {
    emailjs.init('b0j4oYYKIw8emJHxm'); //public key from emailjs
    let response = await emailjs.send('service_68v6fqm', 'template_8dzntis', {
      voornaam: this.form.value.voornaam,
      achternaam: this.form.value.achternaam,

      beschrijving: this.form.value.beschrijving,
      email: this.form.value.email,
    });
    this.form.reset();
  }
}
