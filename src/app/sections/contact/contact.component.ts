import { Component, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private readonly http = inject(HttpClient);

  /** Flip true to skip the PHP call while developing locally */
  private readonly mailTest = false;

  readonly touched = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  submitted = false;
  sendError = false;
  sending = false;

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
    this.sendError = false;

    if (this.form.invalid || this.sending) {
      return;
    }

    const payload = {
      name: this.form.controls.name.value.trim(),
      email: this.form.controls.email.value.trim(),
      message: this.form.controls.message.value.trim(),
    };

    if (this.mailTest) {
      this.finishSuccess();
      return;
    }

    this.sending = true;
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });

    this.http.post('/sendMail.php', JSON.stringify(payload), { headers, responseType: 'text' }).subscribe({
      next: () => this.finishSuccess(),
      error: () => {
        this.sending = false;
        this.sendError = true;
      },
    });
  }

  private finishSuccess(): void {
    this.sending = false;
    this.submitted = true;
    this.sendError = false;
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
