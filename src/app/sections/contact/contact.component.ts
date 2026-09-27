import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly touched = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  submitted = false;

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  markTouched(field: keyof typeof this.touched): void {
    this.touched[field] = true;
  }

  isInvalid(field: keyof typeof this.touched): boolean {
    const control = this.form.controls[field];
    return this.touched[field] && control.invalid;
  }

  onSubmit(): void {
    this.touched.name = true;
    this.touched.email = true;
    this.touched.message = true;
    this.touched.privacy = true;

    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    this.form.reset({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });
    this.touched.name = false;
    this.touched.email = false;
    this.touched.message = false;
    this.touched.privacy = false;
  }
}
