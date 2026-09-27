import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-privacy',
  imports: [TranslatePipe],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {}
