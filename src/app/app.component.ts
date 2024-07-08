import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'email-link-generator';
  generatedLink: string = '';

  subjectControl: FormControl = new FormControl('', Validators.required);
  bodyControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', Validators.required);

  generateLink() {
    this.generatedLink = `mailto:${this.emailControl.value}?subject=${encodeURIComponent(this.subjectControl.value)}&body=${encodeURIComponent(this.bodyControl.value)}`;
  }

  copyToClipboard() {
    const textarea = document.createElement('textarea');
    console.log(this.subjectControl.value, this.emailControl.value)
    textarea.value = this.generatedLink;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // this.snackBar.open('Link copied to clipboard', 'Close', {
    //   duration: 2000,
    // });
  }
}
