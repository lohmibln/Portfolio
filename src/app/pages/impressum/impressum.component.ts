import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-impressum',
  imports: [TranslatePipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {}
