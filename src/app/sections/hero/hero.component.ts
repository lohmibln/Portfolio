import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
